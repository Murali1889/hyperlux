import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckItemProps {
  title: string
  description?: string
  className?: string
}

export function CheckItem({ title, description, className }: CheckItemProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <CheckCircle className="h-6 w-6 flex-shrink-0 text-indigo-600" />
      <div>
        <h3 className="font-medium">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}
