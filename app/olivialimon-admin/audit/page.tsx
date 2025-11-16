"use client"

import { useState, useEffect } from "react"
import { AdminProtectedRoute } from "@/components/admin/AdminProtectedRoute"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Search, Download, RefreshCw, Activity } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface AuditLog {
  id: string
  adminId: string | null
  action: string
  resource: string | null
  ipAddress: string | null
  userAgent: string | null
  success: boolean
  details: any
  createdAt: string
}

interface AuditStats {
  totalLogs: number
  successfulLogins: number
  failedLogins: number
  dataAccessCount: number
  recentFailedLogins: AuditLog[]
  period: string
}

function AuditLogContent() {
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [stats, setStats] = useState<AuditStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    action: '',
    adminId: '',
    startDate: '',
    endDate: '',
  })
  const [page, setPage] = useState(0)
  const limit = 50

  const fetchLogs = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: (page * limit).toString(),
      })
      
      if (filters.action) params.append('action', filters.action)
      if (filters.adminId) params.append('adminId', filters.adminId)
      if (filters.startDate) params.append('startDate', filters.startDate)
      if (filters.endDate) params.append('endDate', filters.endDate)
      
      const response = await fetch(`/api/admin/audit?${params}`, {
        credentials: 'include',
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch audit logs')
      }
      
      const data = await response.json()
      setLogs(data.logs)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load audit logs')
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/audit?stats=true&days=30', {
        credentials: 'include',
      })
      
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  }

  useEffect(() => {
    fetchLogs()
    fetchStats()
  }, [page, filters])

  const handleExport = () => {
    // Export logs as CSV
    const csv = [
      ['ID', 'Admin ID', 'Action', 'Resource', 'IP Address', 'Success', 'Created At'].join(','),
      ...logs.map(log => [
        log.id,
        log.adminId || '',
        log.action,
        log.resource || '',
        log.ipAddress || '',
        log.success ? 'Yes' : 'No',
        new Date(log.createdAt).toISOString(),
      ].join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `audit-logs-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const getActionColor = (action: string) => {
    if (action.includes('login')) return 'text-blue-600'
    if (action.includes('failed')) return 'text-red-600'
    if (action.includes('access')) return 'text-green-600'
    return 'text-gray-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-apple-gray-5 to-apple-gray-6 p-6 md:p-12 safe-area-inset-top">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-2">Admin Audit Logs</h1>
          <p className="text-[17px] leading-[24px] text-apple-gray-2">
            View all admin actions and security events
          </p>
        </div>

        {/* Statistics Cards */}
        {stats && (
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="pb-2 px-6 py-5">
                <CardTitle className="text-[15px] leading-[20px] font-medium text-apple-gray-2">Total Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalLogs}</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="pb-2 px-6 py-5">
                <CardTitle className="text-[15px] leading-[20px] font-medium text-green-600">Successful Logins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.successfulLogins}</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="pb-2 px-6 py-5">
                <CardTitle className="text-[15px] leading-[20px] font-medium text-red-600">Failed Logins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{stats.failedLogins}</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="pb-2 px-6 py-5">
                <CardTitle className="text-[15px] leading-[20px] font-medium text-blue-600">Data Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.dataAccessCount}</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="mb-6 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Filters</CardTitle>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Filter audit logs by action, admin, or date range</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="action">Action</Label>
                <Select value={filters.action} onValueChange={(value) => setFilters({ ...filters, action: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All actions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All actions</SelectItem>
                    <SelectItem value="login">Login</SelectItem>
                    <SelectItem value="login_failed">Failed Login</SelectItem>
                    <SelectItem value="logout">Logout</SelectItem>
                    <SelectItem value="data_access">Data Access</SelectItem>
                    <SelectItem value="data_modify">Data Modify</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="adminId">Admin ID</Label>
                <Input
                  id="adminId"
                  value={filters.adminId}
                  onChange={(e) => setFilters({ ...filters, adminId: e.target.value })}
                  placeholder="Filter by admin"
                />
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={fetchLogs}>
                <Search className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
              <Button onClick={handleExport} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button onClick={() => { setFilters({ action: '', adminId: '', startDate: '', endDate: '' }); setPage(0); }} variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Audit Logs Table */}
        <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Audit Logs</CardTitle>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Recent admin actions and security events</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {loading ? (
              <div className="text-center py-8">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-gray-600" />
                <p className="text-gray-600">Loading audit logs...</p>
              </div>
            ) : logs.length === 0 ? (
              <div className="text-center py-8 text-apple-gray-3">
                No audit logs found
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Time</th>
                        <th className="text-left p-2">Action</th>
                        <th className="text-left p-2">Resource</th>
                        <th className="text-left p-2">IP Address</th>
                        <th className="text-left p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((log) => (
                        <tr key={log.id} className="border-b hover:bg-apple-gray-5/50">
                          <td className="p-2 text-xs text-apple-gray-3">
                            {new Date(log.createdAt).toLocaleString()}
                          </td>
                          <td className={`p-2 font-medium ${getActionColor(log.action)}`}>
                            {log.action}
                          </td>
                          <td className="p-2 text-apple-gray-3 text-xs">
                            {log.resource || '-'}
                          </td>
                          <td className="p-2 text-apple-gray-3 text-xs">
                            {log.ipAddress || '-'}
                          </td>
                          <td className="p-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              log.success 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {log.success ? 'Success' : 'Failed'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <Button
                    variant="outline"
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-apple-gray-3">
                    Page {page + 1}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => setPage(page + 1)}
                    disabled={logs.length < limit}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AuditLogPage() {
  return (
    <AdminProtectedRoute>
      <AuditLogContent />
    </AdminProtectedRoute>
  )
}







