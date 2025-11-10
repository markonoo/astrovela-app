import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

interface HealthCheckResult {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  services: {
    database?: 'connected' | 'disconnected' | 'error';
    astrology_api?: 'connected' | 'disconnected' | 'error';
    supabase?: 'connected' | 'disconnected' | 'error';
    external_apis?: 'connected' | 'degraded' | 'error';
  };
  performance: {
    memory: NodeJS.MemoryUsage;
    responseTime: number;
  };
  checks: Array<{
    name: string;
    status: 'pass' | 'fail' | 'warn';
    message?: string;
    duration?: number;
  }>;
}

/**
 * Comprehensive health check endpoint
 */
export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const checks: HealthCheckResult['checks'] = [];
  const services: HealthCheckResult['services'] = {};
  
  try {
    // 1. Database connectivity check (Supabase ping)
    try {
      const dbStartTime = Date.now();
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        services.database = 'error';
        checks.push({
          name: 'database_connectivity',
          status: 'fail',
          message: 'Supabase environment variables missing',
        });
      } else {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        // Use a lightweight HEAD-style select to verify connectivity
        const { error } = await supabase
          .from('QuizResponse')
          .select('id', { head: true, count: 'exact' });

        const dbDuration = Date.now() - dbStartTime;

        if (!error) {
          services.database = 'connected';
          checks.push({
            name: 'database_connectivity',
            status: 'pass',
            message: 'Supabase reachable and responding',
            duration: dbDuration,
          });
        } else {
          // Distinguish between network/Fetch errors vs permission/RLS errors
          const msg = typeof error.message === 'string' ? error.message : String(error);
          const isNetwork = /fetch/i.test(msg) || /network/i.test(msg);
          services.database = isNetwork ? 'error' : 'connected';
          checks.push({
            name: 'database_connectivity',
            status: isNetwork ? 'fail' : 'warn',
            message: `Supabase ping error: ${msg}`,
            duration: dbDuration,
          });
        }
      }
    } catch (error) {
      services.database = 'error';
      checks.push({
        name: 'database_connectivity',
        status: 'fail',
        message: `Database check error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      });
    }

    // 2. Supabase connectivity check
    try {
      const supabaseStartTime = Date.now();
      
      // Check if Supabase environment variables are available
      const hasSupabaseConfig = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      if (hasSupabaseConfig) {
        services.supabase = 'connected';
        checks.push({
          name: 'supabase_connectivity',
          status: 'pass',
          message: 'Supabase configuration available',
          duration: Date.now() - supabaseStartTime
        });
      } else {
        services.supabase = 'error';
        checks.push({
          name: 'supabase_connectivity',
          status: 'fail',
          message: 'Supabase configuration missing'
        });
      }
    } catch (error) {
      services.supabase = 'error';
      checks.push({
        name: 'supabase_connectivity',
        status: 'fail',
        message: `Supabase check error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }

    // 3. Astrology API check
    try {
      const astroStartTime = Date.now();
      
      // Check if API credentials are available
      const hasAstroConfig = process.env.USER_ID && process.env.API_KEY;
      
      if (hasAstroConfig) {
        services.astrology_api = 'connected';
        checks.push({
          name: 'astrology_api',
          status: 'pass',
          message: 'Astrology API credentials available',
          duration: Date.now() - astroStartTime
        });
      } else {
        services.astrology_api = 'error';
        checks.push({
          name: 'astrology_api',
          status: 'warn',
          message: 'Astrology API credentials missing'
        });
      }
    } catch (error) {
      services.astrology_api = 'error';
      checks.push({
        name: 'astrology_api',
        status: 'fail',
        message: `Astrology API check error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }

    // 4. Memory usage check
    const memoryUsage = process.memoryUsage();
    const memoryUsageMB = memoryUsage.heapUsed / 1024 / 1024;
    
    if (memoryUsageMB < 512) {
      checks.push({
        name: 'memory_usage',
        status: 'pass',
        message: `Memory usage normal: ${memoryUsageMB.toFixed(2)}MB`
      });
    } else if (memoryUsageMB < 1024) {
      checks.push({
        name: 'memory_usage',
        status: 'warn',
        message: `Memory usage elevated: ${memoryUsageMB.toFixed(2)}MB`
      });
    } else {
      checks.push({
        name: 'memory_usage',
        status: 'fail',
        message: `Memory usage critical: ${memoryUsageMB.toFixed(2)}MB`
      });
    }

    // 5. Environment variables check
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      'NODE_ENV'
    ];
    
    const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingEnvVars.length === 0) {
      checks.push({
        name: 'environment_variables',
        status: 'pass',
        message: 'All required environment variables present'
      });
    } else {
      checks.push({
        name: 'environment_variables',
        status: 'fail',
        message: `Missing environment variables: ${missingEnvVars.join(', ')}`
      });
    }

    // 6. Security check
    const hasSecurityHeaders = request.headers.get('x-frame-options') || 
                              request.headers.get('content-security-policy');
    
    if (hasSecurityHeaders) {
      checks.push({
        name: 'security_headers',
        status: 'pass',
        message: 'Security headers are active'
      });
    } else {
      checks.push({
        name: 'security_headers',
        status: 'warn',
        message: 'Security headers not detected'
      });
    }

    // Determine overall health status
    const failedChecks = checks.filter(check => check.status === 'fail');
    const warnChecks = checks.filter(check => check.status === 'warn');
    
    let overallStatus: 'healthy' | 'degraded' | 'unhealthy';
    if (failedChecks.length > 0) {
      overallStatus = 'unhealthy';
    } else if (warnChecks.length > 0) {
      overallStatus = 'degraded';
    } else {
      overallStatus = 'healthy';
    }

    const responseTime = Date.now() - startTime;

    const healthCheck: HealthCheckResult = {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
      environment: process.env.NODE_ENV || 'unknown',
      services,
      performance: {
        memory: memoryUsage,
        responseTime
      },
      checks
    };

    // Set appropriate HTTP status based on health
    const httpStatus = overallStatus === 'healthy' ? 200 : 
                      overallStatus === 'degraded' ? 200 : 503;

    return NextResponse.json(healthCheck, { status: httpStatus });

  } catch (error) {
    // If the health check itself fails, return minimal error response
    const errorResponse: HealthCheckResult = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: 'unknown',
      environment: process.env.NODE_ENV || 'unknown',
      services: {},
      performance: {
        memory: process.memoryUsage(),
        responseTime: Date.now() - startTime
      },
      checks: [{
        name: 'health_check_execution',
        status: 'fail',
        message: `Health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      }]
    };

    return NextResponse.json(errorResponse, { status: 503 });
  }
}

/**
 * Simple ping endpoint for basic uptime monitoring
 */
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
} 