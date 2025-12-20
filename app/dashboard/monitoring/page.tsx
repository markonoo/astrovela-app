'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

interface ShopifyAnalytics {
  status: 'connected' | 'disconnected' | 'error';
  revenue: {
    today: number;
    week: number;
    month: number;
    currency: string;
  };
  orders: {
    today: number;
    week: number;
    month: number;
    pending: number;
  };
  products: {
    total: number;
    published: number;
    outOfStock: number;
  };
  conversion: {
    rate: number;
    visitors: number;
    checkouts: number;
    completions: number;
  };
  lastUpdated: string;
  responseTime: number;
}

interface ShopifyConnection {
  success: boolean;
  status: 'connected' | 'disconnected' | 'error';
  shop?: {
    name: string;
    url: string;
    domain: string;
    currency: string;
  };
  checks: {
    endpoint: boolean;
    token: boolean;
    network: boolean;
    authentication: boolean;
  };
  responseTime: number;
  error?: string;
}

interface MarketingPlatformStatus {
  platform: string;
  status: 'configured' | 'not_configured' | 'connected' | 'disconnected' | 'error';
  pixel_id?: string | null;
  measurement_id?: string | null;
  last_event?: string | null;
  last_event_time?: number | null;
  events_today?: number;
  error_message?: string | null;
}

interface MarketingAnalytics {
  summary: {
    overall_status: 'partial' | 'not_configured' | 'fully_configured';
    platforms_configured: number;
    total_platforms: number;
    configuration_percentage: number;
    last_updated: string;
  };
  platforms: MarketingPlatformStatus[];
}

interface AuraAppStats {
  summary: {
    totalEntitlements: number;
    activeSubscriptions: number;
    expiredTrials: number;
    usersWithReports: number;
    recentEntitlements: number;
    expiringSoon: number;
    conversionRate: string;
  };
  byPlan: Array<{
    plan: string;
    count: number;
  }>;
  timestamp: string;
}

interface PDFStats {
  summary: {
    usersWithReports: number;
    totalChartInterpretations: number;
    recentCharts: number;
    totalChartImages: number;
    recentChartImages: number;
    pdfGenerationRate: string;
  };
  documentMaker: {
    totalPages: number;
    pagesWithContent: number;
  };
  timestamp: string;
}

export default function MonitoringDashboard() {
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [securityEvents, setSecurityEvents] = useState<any[]>([]);
  const [shopifyAnalytics, setShopifyAnalytics] = useState<ShopifyAnalytics | null>(null);
  const [shopifyConnection, setShopifyConnection] = useState<ShopifyConnection | null>(null);
  const [marketingAnalytics, setMarketingAnalytics] = useState<MarketingAnalytics | null>(null);
  const [auraAppStats, setAuraAppStats] = useState<AuraAppStats | null>(null);
  const [pdfStats, setPdfStats] = useState<PDFStats | null>(null);
  const [crispStatus, setCrispStatus] = useState<{
    loaded: boolean;
    active: boolean;
    websiteId: string;
    chatboxOpen: boolean;
    unreadMessages: number;
    error?: string;
  } | null>(null);
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

  const fetchShopifyData = async () => {
    try {
      console.log('🛍️ Fetching Shopify data...');
      
      // Fetch both analytics and connection status in parallel
      const [analyticsResponse, connectionResponse] = await Promise.all([
        fetch('/api/shopify/analytics'),
        fetch('/api/shopify/connection')
      ]);

      if (analyticsResponse.ok) {
        const analyticsData = await analyticsResponse.json();
        setShopifyAnalytics(analyticsData.analytics);
        console.log('✅ Shopify analytics loaded:', analyticsData.analytics);
      } else {
        console.error('❌ Shopify analytics error:', analyticsResponse.status);
      }

      if (connectionResponse.ok) {
        const connectionData = await connectionResponse.json();
        setShopifyConnection(connectionData);
        console.log('✅ Shopify connection status loaded:', connectionData);
      } else {
        console.error('❌ Shopify connection error:', connectionResponse.status);
      }
    } catch (err) {
      console.error('Error fetching Shopify data:', err);
    }
  };

  const fetchMarketingData = async () => {
    try {
      console.log('📊 Fetching Marketing data...');
      
      const response = await fetch('/api/marketing/status');
      
      if (response.ok) {
        const marketingData = await response.json();
        setMarketingAnalytics(marketingData);
        console.log('✅ Marketing analytics loaded:', marketingData);
      } else {
        console.error('❌ Marketing analytics error:', response.status);
      }
    } catch (err) {
      console.error('Error fetching Marketing data:', err);
    }
  };

  const fetchAuraAppStats = async () => {
    try {
      console.log('📱 Fetching Aura App stats...');
      
      const response = await fetch('/api/admin/aura-stats');
      
      if (response.ok) {
        const stats = await response.json();
        setAuraAppStats(stats);
        console.log('✅ Aura App stats loaded:', stats);
      } else {
        console.error('❌ Aura App stats error:', response.status);
      }
    } catch (err) {
      console.error('Error fetching Aura App stats:', err);
    }
  };

  const fetchPDFStats = async () => {
    try {
      console.log('📄 Fetching PDF stats...');
      
      const response = await fetch('/api/admin/pdf-stats');
      
      if (response.ok) {
        const stats = await response.json();
        setPdfStats(stats);
        console.log('✅ PDF stats loaded:', stats);
      } else {
        console.error('❌ PDF stats error:', response.status);
      }
    } catch (err) {
      console.error('Error fetching PDF stats:', err);
    }
  };

  const checkCrispStatus = () => {
    try {
      console.log('💬 Checking Crisp status...');
      
      // Check if Crisp is loaded
      const isLoaded = typeof window !== 'undefined' && 
                       window.$crisp !== undefined && 
                       window.CRISP_WEBSITE_ID !== undefined;
      
      if (isLoaded) {
        // Get Crisp status
        const status = {
          loaded: true,
          active: true,
          websiteId: window.CRISP_WEBSITE_ID,
          chatboxOpen: false,
          unreadMessages: 0,
        };

        // Try to get chatbox state if Crisp API is fully loaded
        try {
          if (window.$crisp && window.$crisp.push) {
            window.$crisp.push(['is', 'chat:opened', (isOpen: boolean) => {
              status.chatboxOpen = isOpen;
            }]);
          }
        } catch (e) {
          console.log('Crisp API not fully initialized yet');
        }

        setCrispStatus(status);
        console.log('✅ Crisp status:', status);
      } else {
        setCrispStatus({
          loaded: false,
          active: false,
          websiteId: '958abb51-98fe-4d1b-980d-401cf8716015',
          chatboxOpen: false,
          unreadMessages: 0,
          error: 'Crisp script not loaded',
        });
        console.log('❌ Crisp not loaded');
      }
    } catch (err) {
      console.error('Error checking Crisp status:', err);
      setCrispStatus({
        loaded: false,
        active: false,
        websiteId: '958abb51-98fe-4d1b-980d-401cf8716015',
        chatboxOpen: false,
        unreadMessages: 0,
        error: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([
      fetchHealthData(),
      fetchPerformanceData(),
      fetchSecurityData(),
      fetchShopifyData(),
      fetchMarketingData(),
      fetchAuraAppStats(),
      fetchPDFStats()
    ]);
    checkCrispStatus();
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

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
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
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🚀 AstroBook Monitoring Dashboard</h1>
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

        {/* Shopify E-commerce Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            🛍️ Shopify E-commerce Overview
            {shopifyConnection && (
              <span className={`ml-3 ${getStatusBadge(shopifyConnection.status)}`}>
                {shopifyConnection.status.toUpperCase()}
              </span>
            )}
          </h2>
          
          {shopifyAnalytics ? (
            <div className="space-y-6">
              {/* Revenue Metrics */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">💰 Revenue Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded border">
                    <h4 className="font-medium text-green-700">Today</h4>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(shopifyAnalytics.revenue.today, shopifyAnalytics.revenue.currency)}
                    </p>
                    <p className="text-sm text-green-600">
                      {shopifyAnalytics.orders.today} orders
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border">
                    <h4 className="font-medium text-blue-700">This Week</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(shopifyAnalytics.revenue.week, shopifyAnalytics.revenue.currency)}
                    </p>
                    <p className="text-sm text-blue-600">
                      {shopifyAnalytics.orders.week} orders
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded border">
                    <h4 className="font-medium text-purple-700">This Month</h4>
                    <p className="text-2xl font-bold text-purple-600">
                      {formatCurrency(shopifyAnalytics.revenue.month, shopifyAnalytics.revenue.currency)}
                    </p>
                    <p className="text-sm text-purple-600">
                      {shopifyAnalytics.orders.month} orders
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversion & Traffic */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">📊 Conversion Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded border">
                    <h4 className="font-medium text-gray-700">Visitors</h4>
                    <p className="text-xl font-bold text-gray-800">
                      {shopifyAnalytics.conversion.visitors.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">Recent traffic</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded border">
                    <h4 className="font-medium text-orange-700">Checkouts</h4>
                    <p className="text-xl font-bold text-orange-600">
                      {shopifyAnalytics.conversion.checkouts}
                    </p>
                    <p className="text-sm text-orange-600">Initiated</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border">
                    <h4 className="font-medium text-green-700">Completions</h4>
                    <p className="text-xl font-bold text-green-600">
                      {shopifyAnalytics.conversion.completions}
                    </p>
                    <p className="text-sm text-green-600">Successful</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded border">
                    <h4 className="font-medium text-indigo-700">Conversion Rate</h4>
                    <p className="text-xl font-bold text-indigo-600">
                      {shopifyAnalytics.conversion.rate}%
                    </p>
                    <p className="text-sm text-indigo-600">Visitor to purchase</p>
                  </div>
                </div>
              </div>

              {/* Product Inventory */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">📦 Product Inventory</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded border">
                    <h4 className="font-medium text-blue-700">Total Products</h4>
                    <p className="text-xl font-bold text-blue-600">
                      {shopifyAnalytics.products.total}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border">
                    <h4 className="font-medium text-green-700">Published</h4>
                    <p className="text-xl font-bold text-green-600">
                      {shopifyAnalytics.products.published}
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded border">
                    <h4 className="font-medium text-red-700">Out of Stock</h4>
                    <p className="text-xl font-bold text-red-600">
                      {shopifyAnalytics.products.outOfStock}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shopify Connection Details */}
              {shopifyConnection && (
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">🔌 Connection Status</h3>
                  <div className="bg-gray-50 p-4 rounded border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700">Store Information</h4>
                        {shopifyConnection.shop ? (
                          <div className="text-sm text-gray-600 space-y-1">
                            <p><strong>Name:</strong> {shopifyConnection.shop.name}</p>
                            <p><strong>Domain:</strong> {shopifyConnection.shop.domain}</p>
                            <p><strong>Currency:</strong> {shopifyConnection.shop.currency}</p>
                          </div>
                        ) : (
                          <p className="text-sm text-red-600">Store info unavailable</p>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700">Connection Checks</h4>
                        <div className="text-sm space-y-1">
                          <div className="flex items-center">
                            <span className={shopifyConnection.checks.endpoint ? "text-green-600" : "text-red-600"}>
                              {shopifyConnection.checks.endpoint ? "✅" : "❌"}
                            </span>
                            <span className="ml-2">Endpoint Configuration</span>
                          </div>
                          <div className="flex items-center">
                            <span className={shopifyConnection.checks.token ? "text-green-600" : "text-red-600"}>
                              {shopifyConnection.checks.token ? "✅" : "❌"}
                            </span>
                            <span className="ml-2">Access Token</span>
                          </div>
                          <div className="flex items-center">
                            <span className={shopifyConnection.checks.network ? "text-green-600" : "text-red-600"}>
                              {shopifyConnection.checks.network ? "✅" : "❌"}
                            </span>
                            <span className="ml-2">Network Connectivity</span>
                          </div>
                          <div className="flex items-center">
                            <span className={shopifyConnection.checks.authentication ? "text-green-600" : "text-red-600"}>
                              {shopifyConnection.checks.authentication ? "✅" : "❌"}
                            </span>
                            <span className="ml-2">Authentication</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        Response Time: {shopifyConnection.responseTime}ms • 
                        Last Updated: {new Date(shopifyAnalytics.lastUpdated).toLocaleString()}
                      </p>
                      {shopifyConnection.error && (
                        <p className="text-sm text-red-600 mt-1">
                          <strong>Error:</strong> {shopifyConnection.error}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Shopify analytics...</p>
            </div>
          )}
        </div>

        {/* Marketing Tracking Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            📊 Marketing Tracking Status
            {marketingAnalytics?.summary && (
              <span className={`ml-3 ${
                marketingAnalytics.summary.overall_status === 'fully_configured' ? 'bg-green-200 text-green-800' :
                marketingAnalytics.summary.overall_status === 'partial' ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              } px-2 py-1 rounded text-sm font-medium`}>
                {marketingAnalytics.summary.overall_status === 'fully_configured' ? 'FULLY CONFIGURED' :
                 marketingAnalytics.summary.overall_status === 'partial' ? 'PARTIALLY CONFIGURED' :
                 'NOT CONFIGURED'}
              </span>
            )}
          </h2>
          
          {marketingAnalytics ? (
            <div className="space-y-6">
              {/* Overall Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded border">
                  <h3 className="font-medium text-blue-700">Platforms Configured</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {marketingAnalytics.summary.platforms_configured} / {marketingAnalytics.summary.total_platforms}
                  </p>
                  <p className="text-sm text-blue-600">
                    {marketingAnalytics.summary.configuration_percentage}% Complete
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded border">
                  <h3 className="font-medium text-green-700">Status</h3>
                  <p className="text-lg font-semibold text-green-600 capitalize">
                    {marketingAnalytics.summary.overall_status.replace('_', ' ')}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded border">
                  <h3 className="font-medium text-purple-700">Last Updated</h3>
                  <p className="text-sm text-purple-600">
                    {new Date(marketingAnalytics.summary.last_updated).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Platform Status Grid */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">🎯 Platform Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {marketingAnalytics.platforms.map((platform, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-800">{platform.platform}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          platform.status === 'configured' ? 'bg-green-200 text-green-800' :
                          platform.status === 'connected' ? 'bg-blue-200 text-blue-800' :
                          'bg-red-200 text-red-800'
                        }`}>
                          {platform.status.toUpperCase().replace('_', ' ')}
                        </span>
                      </div>
                      
                      {/* Platform ID */}
                      {(platform.pixel_id || platform.measurement_id) && (
                        <div className="mb-2">
                          <span className="text-xs text-gray-500">ID:</span>
                          <p className="text-sm font-mono text-gray-700 truncate">
                            {platform.pixel_id || platform.measurement_id}
                          </p>
                        </div>
                      )}
                      
                      {/* Error Message */}
                      {platform.error_message && (
                        <div className="mb-2">
                          <p className="text-xs text-red-600">{platform.error_message}</p>
                        </div>
                      )}
                      
                      {/* Events Today */}
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Events today:</span>
                        <span>{platform.events_today || 0}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Configuration Guide */}
              {marketingAnalytics.summary.overall_status !== 'fully_configured' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <h3 className="font-medium text-yellow-800 mb-2">⚠️ Configuration Required</h3>
                  <p className="text-sm text-yellow-700 mb-3">
                    To enable full marketing tracking, add the following environment variables to your .env files:
                  </p>
                  <div className="space-y-1 text-sm font-mono bg-white p-3 rounded border">
                    {!process.env.NEXT_PUBLIC_META_PIXEL_ID && (
                      <div className="text-gray-600">NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id</div>
                    )}
                    {!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                      <div className="text-gray-600">NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX</div>
                    )}
                    {!process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
                      <div className="text-gray-600">NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX</div>
                    )}
                    {!process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID && (
                      <div className="text-gray-600">NEXT_PUBLIC_TIKTOK_PIXEL_ID=your_tiktok_pixel_id</div>
                    )}
                    {!process.env.NEXT_PUBLIC_PINTEREST_TAG_ID && (
                      <div className="text-gray-600">NEXT_PUBLIC_PINTEREST_TAG_ID=your_pinterest_tag_id</div>
                    )}
                    {!process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID && (
                      <div className="text-gray-600">NEXT_PUBLIC_TWITTER_PIXEL_ID=your_twitter_pixel_id</div>
                    )}
                  </div>
                </div>
              )}

              {/* Marketing Events API */}
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h3 className="font-medium text-blue-800 mb-2">📡 Marketing Events API</h3>
                <p className="text-sm text-blue-700 mb-2">
                  Track marketing events programmatically:
                </p>
                <code className="text-sm text-blue-600 block bg-white p-2 rounded border">
                  POST /api/analytics/events
                </code>
                <a 
                  href="/api/marketing/status" 
                  target="_blank" 
                  className="text-blue-600 hover:text-blue-800 text-sm underline mt-2 inline-block"
                >
                  View Marketing Status API →
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading marketing tracking status...</p>
            </div>
          )}
        </div>

        {/* Crisp Chatbot Status */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            💬 Crisp Live Chat Status
            {crispStatus && (
              <span className={`ml-3 px-2 py-1 rounded text-sm font-medium ${
                crispStatus.loaded && crispStatus.active 
                  ? 'bg-green-200 text-green-800' 
                  : 'bg-red-200 text-red-800'
              }`}>
                {crispStatus.loaded && crispStatus.active ? 'ACTIVE' : 'INACTIVE'}
              </span>
            )}
          </h2>
          
          {crispStatus ? (
            <div className="space-y-6">
              {/* Status Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-4 rounded border ${
                  crispStatus.loaded ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                }`}>
                  <h3 className={`font-medium ${crispStatus.loaded ? 'text-green-700' : 'text-red-700'}`}>
                    Script Status
                  </h3>
                  <p className={`text-2xl font-bold ${crispStatus.loaded ? 'text-green-600' : 'text-red-600'}`}>
                    {crispStatus.loaded ? '✅ Loaded' : '❌ Not Loaded'}
                  </p>
                  <p className={`text-sm ${crispStatus.loaded ? 'text-green-600' : 'text-red-600'}`}>
                    Crisp SDK
                  </p>
                </div>
                
                <div className={`p-4 rounded border ${
                  crispStatus.active ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h3 className={`font-medium ${crispStatus.active ? 'text-green-700' : 'text-gray-700'}`}>
                    Chat Widget
                  </h3>
                  <p className={`text-2xl font-bold ${crispStatus.active ? 'text-green-600' : 'text-gray-600'}`}>
                    {crispStatus.active ? '🟢 Active' : '⚫ Inactive'}
                  </p>
                  <p className={`text-sm ${crispStatus.active ? 'text-green-600' : 'text-gray-600'}`}>
                    Widget visibility
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-medium text-blue-700">Website ID</h3>
                  <p className="text-sm font-mono text-blue-600 truncate">
                    {crispStatus.websiteId}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">Configured</p>
                </div>
              </div>

              {/* Configuration Details */}
              <div className="bg-gray-50 p-4 rounded border">
                <h3 className="font-medium text-gray-700 mb-3">🔧 Configuration Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm mb-2">Integration Info</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Component:</span>
                        <span className="font-mono text-gray-800">CrispChat.tsx</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-mono text-gray-800">/components/</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Scope:</span>
                        <span className="font-mono text-gray-800">Site-wide</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm mb-2">Features</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center">
                        <span className="text-green-600">✅</span>
                        <span className="ml-2 text-gray-700">Real-time messaging</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600">✅</span>
                        <span className="ml-2 text-gray-700">Mobile responsive</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600">✅</span>
                        <span className="ml-2 text-gray-700">Visitor tracking</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600">✅</span>
                        <span className="ml-2 text-gray-700">Email notifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Display */}
              {crispStatus.error && (
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <h3 className="font-medium text-red-800 mb-2">⚠️ Error Detected</h3>
                  <p className="text-sm text-red-700">
                    {crispStatus.error}
                  </p>
                  <p className="text-xs text-red-600 mt-2">
                    Check that the Crisp script is properly loaded in the CrispChat component.
                  </p>
                </div>
              )}

              {/* Management Links */}
              {crispStatus.loaded && crispStatus.active && (
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <h3 className="font-medium text-blue-800 mb-2">🎛️ Crisp Dashboard</h3>
                  <p className="text-sm text-blue-700 mb-3">
                    Manage your live chat, view conversations, and configure settings in the Crisp dashboard.
                  </p>
                  <a 
                    href="https://app.crisp.chat" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                  >
                    Open Crisp Dashboard →
                  </a>
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <h3 className="font-medium text-yellow-800 mb-2">💡 Quick Tips</h3>
                <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                  <li>Chat widget appears in the bottom right corner of all pages</li>
                  <li>Log into Crisp dashboard to receive real-time notifications</li>
                  <li>Customize widget appearance in Crisp Settings → Chatbox Appearance</li>
                  <li>Set up away messages for when you're offline</li>
                  <li>Configure email notifications to never miss a message</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Checking Crisp status...</p>
            </div>
          )}
        </div>

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

        {/* Aura App Analytics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            📱 Aura App Analytics
          </h2>
          
          {auraAppStats ? (
            <div className="space-y-6">
              {/* Summary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded border">
                  <h3 className="font-medium text-blue-700">Total Entitlements</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {auraAppStats.summary.totalEntitlements}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded border">
                  <h3 className="font-medium text-green-700">Active Subscriptions</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {auraAppStats.summary.activeSubscriptions}
                  </p>
                  <p className="text-sm text-green-600">
                    {auraAppStats.summary.conversionRate} conversion
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded border">
                  <h3 className="font-medium text-yellow-700">Expiring Soon</h3>
                  <p className="text-2xl font-bold text-yellow-600">
                    {auraAppStats.summary.expiringSoon}
                  </p>
                  <p className="text-sm text-yellow-600">Next 7 days</p>
                </div>
                <div className="bg-purple-50 p-4 rounded border">
                  <h3 className="font-medium text-purple-700">Users with Reports</h3>
                  <p className="text-2xl font-bold text-purple-600">
                    {auraAppStats.summary.usersWithReports}
                  </p>
                </div>
              </div>

              {/* By Plan Breakdown */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">📊 Entitlements by Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {auraAppStats.byPlan.map((item) => (
                    <div key={item.plan} className="bg-gray-50 p-4 rounded border">
                      <div className="flex items-center justify-between">
                        <span className="font-medium capitalize text-gray-700">{item.plan}</span>
                        <span className="text-2xl font-bold text-gray-800">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700 mb-2">Recent Entitlements</h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {auraAppStats.summary.recentEntitlements}
                  </p>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700 mb-2">Expired Trials</h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {auraAppStats.summary.expiredTrials}
                  </p>
                  <p className="text-sm text-gray-600">Total expired</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Aura App stats...</p>
            </div>
          )}
        </div>

        {/* PDF & Document Maker Analytics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            📄 PDF & Document Maker Analytics
          </h2>
          
          {pdfStats ? (
            <div className="space-y-6">
              {/* Summary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded border">
                  <h3 className="font-medium text-blue-700">Users with Reports</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {pdfStats.summary.usersWithReports}
                  </p>
                  <p className="text-sm text-blue-600">Can download PDFs</p>
                </div>
                <div className="bg-green-50 p-4 rounded border">
                  <h3 className="font-medium text-green-700">Total Charts</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {pdfStats.summary.totalChartInterpretations}
                  </p>
                  <p className="text-sm text-green-600">Natal charts generated</p>
                </div>
                <div className="bg-purple-50 p-4 rounded border">
                  <h3 className="font-medium text-purple-700">Chart Images</h3>
                  <p className="text-2xl font-bold text-purple-600">
                    {pdfStats.summary.totalChartImages}
                  </p>
                  <p className="text-sm text-purple-600">Stored images</p>
                </div>
                <div className="bg-orange-50 p-4 rounded border">
                  <h3 className="font-medium text-orange-700">PDF Rate</h3>
                  <p className="text-2xl font-bold text-orange-600">
                    {pdfStats.summary.pdfGenerationRate}
                  </p>
                  <p className="text-sm text-orange-600">Generation rate</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700 mb-2">Recent Charts</h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {pdfStats.summary.recentCharts}
                  </p>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <h3 className="font-medium text-gray-700 mb-2">Recent Images</h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {pdfStats.summary.recentChartImages}
                  </p>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
              </div>

              {/* Document Maker Info */}
              <div className="bg-indigo-50 p-4 rounded border">
                <h3 className="font-medium text-indigo-700 mb-3">📚 Document Maker Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-indigo-600">Total Pages Available</span>
                    <p className="text-xl font-bold text-indigo-800">
                      {pdfStats.documentMaker.totalPages}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-indigo-600">Pages with Content</span>
                    <p className="text-xl font-bold text-indigo-800">
                      {pdfStats.documentMaker.pagesWithContent}
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-indigo-200">
                  <p className="text-sm text-indigo-600">
                    Report Viewer: <a href="/aura/report/viewer" className="underline">View Demo</a> • 
                    PDF Generation: <a href="/api/aura/report/pdf" className="underline">API Endpoint</a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading PDF stats...</p>
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
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium mb-2">Aura App Stats</h3>
              <code className="text-sm text-gray-600 block mb-2">/api/admin/aura-stats</code>
              <a 
                href="/api/admin/aura-stats" 
                target="_blank" 
                className="text-blue-500 hover:text-blue-700 text-sm underline"
              >
                Test API →
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium mb-2">PDF Stats</h3>
              <code className="text-sm text-gray-600 block mb-2">/api/admin/pdf-stats</code>
              <a 
                href="/api/admin/pdf-stats" 
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
    </ProtectedRoute>
  );
}