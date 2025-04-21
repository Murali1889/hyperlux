import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description?: string
  icon?: LucideIcon
  iconColor?: string
  className?: string
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor = "bg-blue-50 text-blue-600",
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("border-slate-200", className)}>
      <CardContent className="p-6 space-y-2">
        {Icon && (
          <div className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center`}>
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className="text-3xl font-bold">{value}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
