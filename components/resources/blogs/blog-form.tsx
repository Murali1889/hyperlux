"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X } from "lucide-react"

export default function BlogForm() {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log({
            primaryKeyword: (e.target as HTMLFormElement).primaryKeyword.value,
            secondaryKeywords,
            competitorLinks,
            blogIntent: (e.target as HTMLFormElement).blogIntent.value,
        })
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
                        />
                        {index > 0 && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSecondaryKeyword(index)}
                                className="h-10 w-10"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label>Competitor Pages</Label>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addCompetitorLink}
                        className="h-8"
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
                        />
                        {index > 0 && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeCompetitorLink(index)}
                                className="h-10 w-10"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            <div className="space-y-2">
                <Label htmlFor="blogIntent">Blog Intent</Label>
                <Select name="blogIntent" required>
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

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Create Blog
            </Button>
        </form>
    )
} 