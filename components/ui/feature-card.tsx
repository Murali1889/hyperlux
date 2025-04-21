import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon | React.ReactNode
  iconBg?: string
  iconColor?: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  iconBg = "bg-indigo-100",
  iconColor = "text-indigo-600",
  className,
}: FeatureCardProps) {
  const IconComponent = typeof icon === "function" ? icon : null

  return (
    <Card className={cn("bg-background/60 backdrop-blur-sm", className)}>
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
          {IconComponent ? (
            <div className={`w-16 h-16 rounded-full ${iconBg} flex items-center justify-center`}>
              <IconComponent className={`w-8 h-8 ${iconColor}`} />
            </div>
          ) : (
            icon
          )}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
