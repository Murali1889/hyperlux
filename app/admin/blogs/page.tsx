import Link from "next/link"
import { FileText, Edit, Trash2, Plus } from "lucide-react"
import { blogs } from "@/data/blogs"

export default function AdminBlogsPage() {
    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Blogs</h1>
                    <p className="text-gray-600">Manage your blog posts</p>
                </div>
                <Link
                    href="/admin/blogs/create"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                    <Plus className="h-5 w-5" />
                    New Blog
                </Link>
            </div>

            {/* Blog List */}
            <div className="bg-white rounded-lg border">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Author</th>
                                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                <FileText className="h-5 w-5 text-indigo-600" />
                                            </div>
                                            <div>
                                                <div className="font-medium">{blog.title}</div>
                                                <div className="text-sm text-gray-500">{blog.readTime}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                            {blog.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{blog.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                                                {blog.author.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </div>
                                            <span className="text-sm">{blog.author.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/admin/blogs/${blog.id}/edit`}
                                                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"
                                            >
                                                <Edit className="h-5 w-5" />
                                            </Link>
                                            {/* <button
                                                // onClick={() => {
                                                //     // TODO: Implement delete functionality
                                                //     // if (confirm("Are you sure you want to delete this blog?")) {
                                                //     //     console.log("Delete blog:", blog.id)
                                                //     // }
                                                // }}
                                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
} 