'use client';

import { useEffect, useState } from 'react';

export default function MonitoringDashboard() {
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [securityEvents, setSecurityEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const fetchHealthData = async () => {
    try {
      console.log('Fetching health data...');
      const response = await fetch('/api/health');
      console.log('Health API response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Health data:', data);
        setHealthStatus(data);
      } else {
        setError(`Health API returned ${response.status}`);
      }
    } catch (err) {
      console.error('Error fetching health data:', err);
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const fetchPerformanceData = async () => {
    try {
      const response = await fetch('/api/analytics/performance');
      if (response.ok) {
        const data = await response.json();
        setPerformanceData(data);
      }
    } catch (err) {
      console.error('Error fetching performance data:', err);
    }
  };

  const fetchSecurityData = async () => {
    try {
      const response = await fetch('/api/security/monitoring');
      if (response.ok) {
        const data = await response.json();
        setSecurityEvents(data.events || []);
      }
    } catch (err) {
      console.error('Error fetching security data:', err);
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([
      fetchHealthData(),
      fetchPerformanceData(),
      fetchSecurityData()
    ]);
    setLastRefresh(new Date());
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchAllData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded text-sm font-medium";
    switch (status) {
      case 'healthy':
      case 'pass':
      case 'connected':
        return `${baseClasses} bg-green-200 text-green-800`;
      case 'degraded':
      case 'warn':
        return `${baseClasses} bg-yellow-200 text-yellow-800`;
      case 'unhealthy':
      case 'fail':
      case 'error':
      case 'disconnected':
        return `${baseClasses} bg-red-200 text-red-800`;
      default:
        return `${baseClasses} bg-gray-200 text-gray-800`;
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
          <p>Loading monitoring dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🚀 System Monitoring Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Last updated: {lastRefresh.toLocaleTimeString()} • Auto-refresh: 30s
              </p>
            </div>
            <button 
              onClick={fetchAllData}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {loading ? '🔄 Refreshing...' : '🔄 Refresh'}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-500">⚠️</span>
              </div>
              <div className="ml-3">
                <strong>Error:</strong> {error}
              </div>
            </div>
          </div>
        )}

        {/* System Health Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            🏥 System Health Overview
            {healthStatus && (
              <span className={`ml-3 ${getStatusBadge(healthStatus.status)}`}>
                {healthStatus.status?.toUpperCase() || 'UNKNOWN'}
              </span>
            )}
          </h2>
          
          {healthStatus ? (
            <div className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700">Uptime</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {healthStatus.uptime ? formatUptime(healthStatus.uptime) : 'Unknown'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700">Environment</h3>
                  <p className="text-lg font-semibold text-gray-800">
                    {healthStatus.environment || process.env.NODE_ENV || 'Unknown'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700">Last Check</h3>
                  <p className="text-sm text-gray-600">
                    {healthStatus.timestamp ? new Date(healthStatus.timestamp).toLocaleString() : 'Unknown'}
                  </p>
                </div>
              </div>

              {/* Services Status */}
              {healthStatus.services && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">🔧 Services Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {Object.entries(healthStatus.services).map(([service, status]) => (
                      <div key={service} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                        <span className="font-medium capitalize">{service.replace('_', ' ')}</span>
                        <span className={getStatusBadge(status as string)}>
                          {status as string}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Health Checks */}
              {healthStatus.checks && healthStatus.checks.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">✅ Health Checks</h3>
                  <div className="space-y-2">
                    {healthStatus.checks.map((check: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                        <div>
                          <span className="font-medium">{check.name?.replace('_', ' ')}</span>
                          {check.message && (
                            <p className="text-sm text-gray-600 mt-1">{check.message}</p>
                          )}
                        </div>
                        <span className={getStatusBadge(check.status)}>
                          {check.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance Info */}
              {healthStatus.performance && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">⚡ Performance Metrics</h3>
                  <div className="bg-gray-50 p-4 rounded border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Memory Usage</span>
                        <p className="text-lg font-semibold">
                          {healthStatus.performance.memory ? 
                            `${(healthStatus.performance.memory.heapUsed / 1024 / 1024).toFixed(2)} MB` : 
                            'Unknown'}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Response Time</span>
                        <p className="text-lg font-semibold">
                          {healthStatus.performance.responseTime || 'Unknown'} ms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>No health data available</p>
              <button 
                onClick={fetchHealthData}
                className="mt-2 text-blue-500 hover:text-blue-700 underline"
              >
                Try loading health data
              </button>
            </div>
          )}
        </div>

        {/* Performance Data */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">📈 Performance Analytics</h2>
          {performanceData && performanceData.data ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded border">
                <div className="text-2xl font-bold text-blue-600">
                  {performanceData.data.averageLCP || 0}ms
                </div>
                <div className="text-sm text-gray-600">LCP</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded border">
                <div className="text-2xl font-bold text-green-600">
                  {performanceData.data.averageFID || 0}ms
                </div>
                <div className="text-sm text-gray-600">FID</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded border">
                <div className="text-2xl font-bold text-purple-600">
                  {performanceData.data.averageCLS || 0}
                </div>
                <div className="text-sm text-gray-600">CLS</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded border">
                <div className="text-2xl font-bold text-orange-600">
                  {performanceData.data.averageFCP || 0}ms
                </div>
                <div className="text-sm text-gray-600">FCP</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded border">
                <div className="text-2xl font-bold text-yellow-600">
                  {performanceData.data.averageTTFB || 0}ms
                </div>
                <div className="text-sm text-gray-600">TTFB</div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-4">
              No performance data available yet
            </div>
          )}
        </div>

        {/* Security Events */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">🛡️ Security Events</h2>
          {securityEvents.length > 0 ? (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {securityEvents.slice(0, 10).map((event, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded border text-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      event.type === 'rate_limit_exceeded' ? 'bg-yellow-200 text-yellow-800' :
                      event.type === 'suspicious_request' ? 'bg-red-200 text-red-800' :
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {event.type}
                    </span>
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
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-4">
              No security events recorded
            </div>
          )}
        </div>

        {/* API Endpoints */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">🔗 Available Monitoring APIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium mb-2">Health Check</h3>
              <code className="text-sm text-gray-600 block mb-2">/api/health</code>
              <a 
                href="/api/health" 
                target="_blank" 
                className="text-blue-500 hover:text-blue-700 text-sm underline"
              >
                Test API →
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium mb-2">Performance Analytics</h3>
              <code className="text-sm text-gray-600 block mb-2">/api/analytics/performance</code>
              <a 
                href="/api/analytics/performance" 
                target="_blank" 
                className="text-blue-500 hover:text-blue-700 text-sm underline"
              >
                Test API →
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium mb-2">Security Monitoring</h3>
              <code className="text-sm text-gray-600 block mb-2">/api/security/monitoring</code>
              <a 
                href="/api/security/monitoring" 
                target="_blank" 
                className="text-blue-500 hover:text-blue-700 text-sm underline"
              >
                Test API →
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white p-4 rounded-lg shadow text-center text-sm text-gray-600">
          <p>🔧 AstroBook Monitoring Dashboard • Built with Next.js</p>
          <p>Environment: {process.env.NODE_ENV || 'development'} • Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}