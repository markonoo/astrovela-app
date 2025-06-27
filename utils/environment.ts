/**
 * Environment variable configuration
 * Simple and safe environment variable access for development and production
 */

// Environment configuration with safe fallbacks
export const env = {
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  DATABASE_URL: process.env.DATABASE_URL || '',
  
  // Astrology API (with development fallbacks)
  USER_ID: process.env.USER_ID || '642085',
  API_KEY: process.env.API_KEY || '13bfcdadccb0479d0210413485482bec21047ce0',
  
  // Shopify (try both NEXT_PUBLIC_ and regular versions)
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT: 
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT || 
    process.env.SHOPIFY_STOREFRONT_API_ENDPOINT || 
    'https://0wbv78-wi.myshopify.com/api/2024-01/graphql.json',
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: 
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || 
    '0d3432993f819b0edf650257875519f5',
  
  // App Config
  NODE_ENV: process.env.NODE_ENV || 'development'
}

// Development logging utility - only logs in development
export const devLog = (...args: any[]): void => {
  if (env.NODE_ENV === 'development') {
    console.log(...args)
  }
}

// Development error logging utility - only logs in development
export const devError = (...args: any[]): void => {
  if (env.NODE_ENV === 'development') {
    console.error(...args)
  }
}

// Production error logging utility - always logs errors
export const prodError = (...args: any[]): void => {
  console.error(...args)
}

// Environment validation class (for explicit validation when needed)
export class EnvironmentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EnvironmentError'
  }
}

// Optional validation function (only call when needed server-side)
export function validateEnvironment(): void {
  if (env.NODE_ENV === 'production' && typeof window === 'undefined') {
    const missing: string[] = []
    
    if (!env.NEXT_PUBLIC_SUPABASE_URL) missing.push('NEXT_PUBLIC_SUPABASE_URL')
    if (!env.NEXT_PUBLIC_SUPABASE_ANON_KEY) missing.push('NEXT_PUBLIC_SUPABASE_ANON_KEY')
    if (!env.DATABASE_URL) missing.push('DATABASE_URL')
    if (!env.USER_ID) missing.push('USER_ID')
    if (!env.API_KEY) missing.push('API_KEY')

    if (missing.length > 0) {
      throw new EnvironmentError(
        `Missing required environment variables in production: ${missing.join(', ')}\n` +
        'Please check your .env file and ensure all required variables are set.'
      )
    }
  }
}

interface MonitoringConfig {
  sentryDsn?: string;
  sentryEnvironment: string;
  vercelAnalyticsId?: string;
  enableErrorReporting: boolean;
  enablePerformanceTracking: boolean;
  enableSecurityMonitoring: boolean;
}

/**
 * Get monitoring configuration from environment variables
 */
export function getMonitoringConfig(): MonitoringConfig {
  return {
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    sentryEnvironment: process.env.NODE_ENV || 'development',
    vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
    enableErrorReporting: process.env.FEATURE_ERROR_REPORTING !== 'false',
    enablePerformanceTracking: process.env.FEATURE_PERFORMANCE_TRACKING !== 'false',
    enableSecurityMonitoring: process.env.SECURITY_MONITORING_ENABLED === 'true',
  };
}

/**
 * Validate monitoring environment variables
 */
export function validateMonitoringEnv(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check for Sentry configuration in production
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SENTRY_DSN) {
    errors.push('NEXT_PUBLIC_SENTRY_DSN is recommended for production error monitoring');
  }
  
  // Validate Sentry DSN format if provided
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn.startsWith('https://') || !dsn.includes('@sentry.io')) {
      errors.push('NEXT_PUBLIC_SENTRY_DSN appears to be invalid format');
    }
  }
  
  // Check for analytics configuration
  if (process.env.NODE_ENV === 'production' && 
      !process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID && 
      !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    errors.push('No analytics configuration found (NEXT_PUBLIC_VERCEL_ANALYTICS_ID or NEXT_PUBLIC_GA_MEASUREMENT_ID)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export default env 