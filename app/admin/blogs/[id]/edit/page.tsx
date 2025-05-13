import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { blogs } from "@/data/blogs"

export default function EditBlogPage({ params }: { params: { id: string } }) {
    const isNewBlog = params.id === "create"
    const blog = isNewBlog ? null : blogs.find((b) => b.id === params.id)

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/blogs"
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">
                        {isNewBlog ? "Create New Blog" : "Edit Blog"}
                    </h1>
                    <p className="text-gray-600">
                        {isNewBlog
                            ? "Create a new blog post"
                            : "Edit the details of your blog post"}
                    </p>
                </div>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    {/* Title */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={blog?.title}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            placeholder="Enter blog title"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            defaultValue={blog?.category}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                        >
                            <option value="">Select a category</option>
                            <option value="API Development">API Development</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="DevOps">DevOps</option>
                        </select>
                    </div>

                    {/* Content */}
                    <div>
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows={10}
                            defaultValue={blog?.content}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            placeholder="Write your blog content here..."
                        />
                    </div>

                    {/* Featured Image */}
                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Featured Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Link
                        href="/admin/blogs"
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {isNewBlog ? "Create Blog" : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    )
} 