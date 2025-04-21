"use client"

import { useState, useEffect } from "react"

interface ConfettiAnimationProps {
  show: boolean
  duration?: number
  onComplete?: () => void
}

export default function ConfettiAnimation({ show, duration = 3000, onComplete }: ConfettiAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)

      const timer = setTimeout(() => {
        setIsVisible(false)
        if (onComplete) onComplete()
      }, duration)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [show, duration, onComplete])

  if (!isVisible) return null

  // Generate confetti pieces
  const confettiPieces = Array.from({ length: 150 }).map((_, i) => {
    const size = Math.random() * 15 + 5
    const left = Math.random() * 100
    const animationDuration = Math.random() * 3 + 2
    const delay = Math.random() * 0.5

    // Randomly choose between regular confetti and dollar sign
    const isDollar = Math.random() > 0.7

    // Random colors for regular confetti
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-indigo-500"]
    const color = colors[Math.floor(Math.random() * colors.length)]

    return {
      id: i,
      size,
      left,
      animationDuration,
      delay,
      isDollar,
      color,
    }
  })

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) =>
        piece.isDollar ? (
          <div
            key={piece.id}
            className="absolute text-green-500 font-bold"
            style={{
              fontSize: `${piece.size}px`,
              left: `${piece.left}%`,
              top: "-20px",
              animation: `fall ${piece.animationDuration}s ease-in forwards`,
              animationDelay: `${piece.delay}s`,
            }}
          >
            $
          </div>
        ) : (
          <div
            key={piece.id}
            className={`absolute rounded-full ${piece.color}`}
            style={{
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              left: `${piece.left}%`,
              top: "-20px",
              animation: `fall ${piece.animationDuration}s ease-in forwards`,
              animationDelay: `${piece.delay}s`,
            }}
          />
        ),
      )}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
