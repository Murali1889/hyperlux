'use client'
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitDemoForm } from "@/lib/submitForm"
import { useState } from "react"
import toast from "react-hot-toast"

export function DemoBookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const data = {
            e: form['email'].value,
            p: form['phone'].value,
            w: form['where-did-you-hear-about-us'].value,
            ca: new Date().toISOString()
        }

        try {
            const result = await submitDemoForm(data)
            if (result.success) {
                toast.success("Demo booked successfully! We'll contact you soon.")
                form.reset()
            } else {
                toast.error(`Failed to submit form: ${result.error}`)
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleDemoSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Corporate Email</Label>
                <Input id="email" type="email" placeholder="john.doe@company.com" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="where-did-you-hear-about-us">Where did you hear about us?</Label>
                <Input
                    id="where-did-you-hear-about-us"
                    placeholder="Google, LinkedIn, Referral, AI, etc."
                    required
                />
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-2">
                    <div className="flex h-5 items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            required
                        />
                    </div>
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to DocsAPI's{" "}
                        <Link href="#" className="text-indigo-600 hover:underline">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-indigo-600 hover:underline">
                            Privacy Policy
                        </Link>
                    </Label>
                </div>
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Book My Demo"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    )
} 