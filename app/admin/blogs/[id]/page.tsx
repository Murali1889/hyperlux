"use client"

import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BlogViewPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [blog, setBlog] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, "blogs", params.id)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setBlog({ id: docSnap.id, ...docSnap.data() })
                } else {
                    console.error("No such blog!")
                }
            } catch (error) {
                console.error("Error fetching blog:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlog()
    }, [params.id])

    if (loading) {
        return (
            <div className="container max-w-4xl py-8">
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                </div>
            </div>
        )
    }

    if (!blog) {
        return (
            <div className="container max-w-4xl py-8">
                <Card className="p-6">
                    <h1 className="text-2xl font-bold mb-4 text-red-600">Blog not found</h1>
                    <Button onClick={() => router.back()}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>
                </Card>
            </div>
        )
    }

    return (
        <div className="container max-w-4xl py-8">
            <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <Button variant="outline" onClick={() => router.back()}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blogs
                    </Button>
                    <div className="text-sm text-muted-foreground">
                        Status: <span className="capitalize">{blog.status}</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <div className="text-muted-foreground mb-6">{blog.metaDescription}</div>

                <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Image Generation Prompt</h3>
                    <p className="text-sm text-muted-foreground">{blog.imagePrompt}</p>
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold mb-2">SEO Information</h3>
                    <div className="space-y-2 text-sm">
                        <p><strong>Primary Keyword:</strong> {blog.primaryKeyword}</p>
                        <p><strong>Secondary Keywords:</strong> {blog.secondaryKeywords.join(", ")}</p>
                        <p><strong>Intent:</strong> {blog.intent}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
} 