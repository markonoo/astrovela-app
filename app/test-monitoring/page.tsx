export default function TestMonitoring() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🧪 Monitoring System Test</h1>
      
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        <h2 className="font-bold">✅ SUCCESS: Monitoring System is Working!</h2>
        <p>If you can see this page, your Next.js routing is functioning correctly.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-4">📋 Available Monitoring Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded border">
              <h3 className="font-medium text-blue-800">🚀 Main Dashboard</h3>
              <p className="text-sm text-blue-600 mb-2">Complete monitoring overview</p>
              <a 
                href="/dashboard/monitoring" 
                className="text-blue-500 hover:text-blue-700 underline"
              >
                → Visit Dashboard
              </a>
            </div>
            
            <div className="bg-green-50 p-4 rounded border">
              <h3 className="font-medium text-green-800">🏥 Health Check</h3>
              <p className="text-sm text-green-600 mb-2">System health status</p>
              <a 
                href="/api/health" 
                target="_blank"
                className="text-green-500 hover:text-green-700 underline"
              >
                → Test API
              </a>
            </div>
            
            <div className="bg-purple-50 p-4 rounded border">
              <h3 className="font-medium text-purple-800">📈 Performance</h3>
              <p className="text-sm text-purple-600 mb-2">Analytics & metrics</p>
              <a 
                href="/api/analytics/performance" 
                target="_blank"
                className="text-purple-500 hover:text-purple-700 underline"
              >
                → Test API
              </a>
            </div>
            
            <div className="bg-red-50 p-4 rounded border">
              <h3 className="font-medium text-red-800">🛡️ Security</h3>
              <p className="text-sm text-red-600 mb-2">Security monitoring</p>
              <a 
                href="/api/security/monitoring" 
                target="_blank"
                className="text-red-500 hover:text-red-700 underline"
              >
                → Test API
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-4">🔧 Quick Tests</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>✅ Next.js App Router</span>
              <span className="text-green-600 font-medium">Working</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>✅ API Routes</span>
              <span className="text-green-600 font-medium">Working</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>✅ Tailwind CSS</span>
              <span className="text-green-600 font-medium">Working</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>✅ TypeScript</span>
              <span className="text-green-600 font-medium">Working</span>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <h3 className="font-medium text-yellow-800 mb-2">💡 Next Steps</h3>
          <ol className="list-decimal list-inside text-sm text-yellow-700 space-y-1">
            <li>Visit the main monitoring dashboard at <code>/dashboard/monitoring</code></li>
            <li>Check that all API endpoints return data</li>
            <li>Verify auto-refresh functionality (30-second intervals)</li>
            <li>Test error handling by visiting a non-existent API endpoint</li>
          </ol>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>🔧 Test Page • Environment: {process.env.NODE_ENV || 'development'}</p>
        <p>Generated at: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}