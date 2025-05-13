import { FileText, Users, Eye, TrendingUp, Settings } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600">Welcome to your admin dashboard</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                            <FileText className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Blogs</p>
                            <p className="text-2xl font-bold">24</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Users</p>
                            <p className="text-2xl font-bold">1,234</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-100 rounded-lg">
                            <Eye className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Views</p>
                            <p className="text-2xl font-bold">45.2K</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Growth</p>
                            <p className="text-2xl font-bold">+12.5%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        href="/admin/blogs/create"
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
                    >
                        <FileText className="h-5 w-5 text-indigo-600" />
                        <span>Create New Blog</span>
                    </Link>
                    <Link
                        href="/admin/users"
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
                    >
                        <Users className="h-5 w-5 text-indigo-600" />
                        <span>Manage Users</span>
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
                    >
                        <Settings className="h-5 w-5 text-indigo-600" />
                        <span>Update Settings</span>
                    </Link>
                </div>
            </div>
        </div>
    )
} 