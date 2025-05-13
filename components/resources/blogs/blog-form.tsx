"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X, Loader2 } from "lucide-react"
import { generateAndStoreBlog } from "@/lib/blogActions"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function BlogForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [secondaryKeywords, setSecondaryKeywords] = useState<string[]>([""])
    const [competitorLinks, setCompetitorLinks] = useState<string[]>([""])

    const addSecondaryKeyword = () => {
        setSecondaryKeywords([...secondaryKeywords, ""])
    }

    const removeSecondaryKeyword = (index: number) => {
        setSecondaryKeywords(secondaryKeywords.filter((_, i) => i !== index))
    }

    const updateSecondaryKeyword = (index: number, value: string) => {
        const newKeywords = [...secondaryKeywords]
        newKeywords[index] = value
        setSecondaryKeywords(newKeywords)
    }

    const addCompetitorLink = () => {
        setCompetitorLinks([...competitorLinks, ""])
    }

    const removeCompetitorLink = (index: number) => {
        setCompetitorLinks(competitorLinks.filter((_, i) => i !== index))
    }

    const updateCompetitorLink = (index: number, value: string) => {
        const newLinks = [...competitorLinks]
        newLinks[index] = value
        setCompetitorLinks(newLinks)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const form = e.target as HTMLFormElement
            const result = await generateAndStoreBlog({
                primaryKeyword: form.primaryKeyword.value,
                secondaryKeywords: secondaryKeywords.filter(k => k.trim() !== ""),
                competitorLinks: competitorLinks.filter(l => l.trim() !== ""),
                blogIntent: form.blogIntent.value,
            })

            if (result.success) {
                toast.success("Blog generated successfully!")
                router.push(`/admin/blogs/${result.id}`)
            } else {
                toast.error(result.error || "Failed to generate blog")
            }
        } catch (error: any) {
            toast.error(error.message || "An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="primaryKeyword">Primary Keyword</Label>
                <Input
                    id="primaryKeyword"
                    name="primaryKeyword"
                    placeholder="Enter primary keyword"
                    required
                    disabled={isLoading}
                />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label>Secondary Keywords</Label>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addSecondaryKeyword}
                        className="h-8"
                        disabled={isLoading}
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Keyword
                    </Button>
                </div>
                {secondaryKeywords.map((keyword, index) => (
                    <div key={index} className="flex gap-2">
                        <Input
                            value={keyword}
                            onChange={(e) => updateSecondaryKeyword(index, e.target.value)}
                            placeholder="Enter secondary keyword"
                            disabled={isLoading}
                        />
                        {index > 0 && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSecondaryKeyword(index)}
                                className="h-10 w-10"
                                disabled={isLoading}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            {/* <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label>Competitor Pages</Label>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addCompetitorLink}
                        className="h-8"
                        disabled={isLoading}
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Link
                    </Button>
                </div>
                {competitorLinks.map((link, index) => (
                    <div key={index} className="flex gap-2">
                        <Input
                            value={link}
                            onChange={(e) => updateCompetitorLink(index, e.target.value)}
                            placeholder="Enter competitor page URL"
                            type="url"
                            disabled={isLoading}
                        />
                        {index > 0 && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeCompetitorLink(index)}
                                className="h-10 w-10"
                                disabled={isLoading}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div> */}

            <div className="space-y-2">
                <Label htmlFor="blogIntent">Blog Intent</Label>
                <Select name="blogIntent" required disabled={isLoading}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select blog intent" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="informative">Informative</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="transactional">Transactional</SelectItem>
                        <SelectItem value="navigational">Navigational</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Blog...
                    </>
                ) : (
                    "Create Blog"
                )}
            </Button>
        </form>
    )
} 