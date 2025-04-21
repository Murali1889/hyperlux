import { cn } from "@/lib/utils"
import type React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  container?: boolean
  id?: string
  background?: "default" | "muted" | "primary" | "gradient"
}

export function Section({ children, className, container = true, id, background = "default", ...props }: SectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-slate-50",
    primary: "bg-indigo-50",
    gradient: "bg-gradient-to-br from-indigo-900 to-indigo-800 text-white",
  }

  return (
    <section id={id} className={cn("py-16 md:py-24", backgroundClasses[background], className)} {...props}>
      {container ? <div className="container px-4 md:px-6">{children}</div> : children}
    </section>
  )
}

export function SectionHeader({
  title,
  description,
  className,
  ...props
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("text-center space-y-4 mb-12", className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      {description && <p className="mx-auto max-w-3xl text-muted-foreground">{description}</p>}
    </div>
  )
}
