'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SecurityEvent {
  type: string;
  ip: string;
  path: string;
  timestamp: string;
  userAgent?: string;
  details?: any;
}

interface PerformanceData {
  averageLCP: number;
  averageFID: number;
  averageCLS: number;
  averageFCP: number;
  averageTTFB: number;
  sampleCount: number;
}

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  services: Record<string, string>;
  checks: Array<{
    name: string;
    status: 'pass' | 'fail' | 'warn';
    message?: string;
  }>;
}

export default function MonitoringDashboard() {
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch security events
      const securityRes = await fetch('/api/security/monitoring');
      if (securityRes.ok) {
        const securityData = await securityRes.json();
        setSecurityEvents(securityData.events || []);
      }

      // Fetch performance data
      const perfRes = await fetch('/api/analytics/performance');
      if (perfRes.ok) {
        const perfData = await perfRes.json();
        setPerformanceData(perfData.data);
      }

      // Fetch health status
      const healthRes = await fetch('/api/health');
      if (healthRes.ok) {
        const healthData = await healthRes.json();
        setHealthStatus(healthData);
      }

      setLastRefresh(new Date());
    } catch (error) {
      console.error('Failed to fetch monitoring data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'pass':
        return 'bg-green-500';
      case 'degraded':
      case 'warn':
        return 'bg-yellow-500';
      case 'unhealthy':
      case 'fail':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  if (loading && !healthStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading monitoring data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">System Monitoring</h1>
          <p className="text-gray-600">Last updated: {lastRefresh.toLocaleTimeString()}</p>
        </div>
        <Button onClick={fetchData} disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      {/* System Health Overview */}
      {healthStatus && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              System Health
              <Badge className={getStatusColor(healthStatus.status)}>
                {healthStatus.status.toUpperCase()}
              </Badge>
            </CardTitle>
            <CardDescription>
              Uptime: {formatUptime(healthStatus.uptime)} | Last check: {new Date(healthStatus.timestamp).toLocaleTimeString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(healthStatus.services).map(([service, status]) => (
                <div key={service} className="flex items-center justify-between p-3 border rounded">
                  <span className="font-medium capitalize">{service.replace('_', ' ')}</span>
                  <Badge className={getStatusColor(status)}>
                    {status}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Health Checks</h4>
              <div className="space-y-2">
                {healthStatus.checks.map((check, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                    <span>{check.name.replace('_', ' ')}</span>
                    <div className="flex items-center gap-2">
                      {check.message && <span className="text-gray-600">{check.message}</span>}
                      <Badge className={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Core Web Vitals - Last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            {performanceData ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 border rounded">
                    <div className="text-2xl font-bold text-blue-600">{performanceData.averageLCP}ms</div>
                    <div className="text-sm text-gray-600">LCP (Largest Contentful Paint)</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-2xl font-bold text-green-600">{performanceData.averageFID}ms</div>
                    <div className="text-sm text-gray-600">FID (First Input Delay)</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-2xl font-bold text-purple-600">{performanceData.averageCLS}</div>
                    <div className="text-sm text-gray-600">CLS (Cumulative Layout Shift)</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-2xl font-bold text-orange-600">{performanceData.averageFCP}ms</div>
                    <div className="text-sm text-gray-600">FCP (First Contentful Paint)</div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Based on {performanceData.sampleCount} samples
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">No performance data available</div>
            )}
          </CardContent>
        </Card>

        {/* Security Events */}
        <Card>
          <CardHeader>
            <CardTitle>Security Events</CardTitle>
            <CardDescription>Recent security incidents and monitoring alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {securityEvents.length > 0 ? (
                securityEvents.slice(0, 10).map((event, index) => (
                  <div key={index} className="p-3 border rounded text-sm">
                    <div className="flex justify-between items-start mb-1">
                      <Badge variant="outline">{event.type}</Badge>
                      <span className="text-xs text-gray-500">
                        {new Date(event.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className="text-gray-700">
                      <div>IP: {event.ip}</div>
                      <div>Path: {event.path}</div>
                      {event.userAgent && (
                        <div className="text-xs text-gray-500 mt-1 truncate">
                          UA: {event.userAgent}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">No security events recorded</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 