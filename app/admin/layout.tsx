import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { FileText, Users, Settings, LayoutDashboard } from "lucide-react"

export const metadata: Metadata = {
    title: "DocsAPI | Admin",
    description: "DocsAPI Admin",
  }

  
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <aside className="col-span-2 fixed">
                        <nav className="space-y-1">
                            <Link
                                href="/admin"
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                            >
                                <LayoutDashboard className="h-5 w-5" />
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/blogs"
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                            >
                                <FileText className="h-5 w-5" />
                                Blogs
                            </Link>
                            <Link
                                href="/admin/users"
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                            >
                                <Users className="h-5 w-5" />
                                Users
                            </Link>
                            <Link
                                href="/admin/settings"
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                            >
                                <Settings className="h-5 w-5" />
                                Settings
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="col-span-10 col-start-3 bg-white rounded-lg shadow p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
} 