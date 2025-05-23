"use client"

import { FeedbackProvider } from "@/context/FeedbackContext"

export default function FeedbackProviderClient({
  children,
}: {
  children: React.ReactNode
}) {
  return <FeedbackProvider>{children}</FeedbackProvider>
}
