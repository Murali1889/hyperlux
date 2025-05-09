import BlogForm from "@/components/resources/blogs/blog-form"
import { Card } from "@/components/ui/card"

export default function CreateBlogPage() {
    return (
        <div className="container max-w-2xl py-8">
            <Card className="p-6">
                <h1 className="text-2xl font-bold mb-6 text-indigo-600">Create New Blog</h1>
                <BlogForm />
            </Card>
        </div>
    )
} 