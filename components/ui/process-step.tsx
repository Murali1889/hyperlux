interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-700 flex items-center justify-center text-lg font-bold text-white">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-indigo-200">{description}</p>
      </div>
    </div>
  )
}
