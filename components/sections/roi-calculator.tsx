"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign, Clock, Users, TrendingUp, ArrowRight } from "lucide-react"
import ConfettiAnimation from "../ui/confetti-animation"

export default function ROICalculator() {
  const [applications, setApplications] = useState(1000)
  const [reviewTeamSize, setReviewTeamSize] = useState(10)
  const [location, setLocation] = useState("onshore")
  const [showResults, setShowResults] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Calculate metrics based on inputs
  const calculateMetrics = () => {
    const hourlyRate = location === "onshore" ? 35 : 15 // USD per hour
    const manualReviewTime = 45 // minutes per application
    const aiReviewTime = 9 // minutes per application (80% reduction)

    const manualReviewCost = ((applications * manualReviewTime) / 60) * hourlyRate
    const aiReviewCost = ((applications * aiReviewTime) / 60) * hourlyRate
    const costSavings = manualReviewCost - aiReviewCost
    const costSavingsPercentage = Math.round((costSavings / manualReviewCost) * 100)

    const manualProcessingDays = Math.ceil((applications * manualReviewTime) / (reviewTeamSize * 60 * 8))
    const aiProcessingDays = Math.ceil((applications * aiReviewTime) / (reviewTeamSize * 60 * 8))
    const timeReduction = manualProcessingDays - aiProcessingDays

    // Conversion rate improvement (assumption: faster processing = better conversion)
    const baseConversionRate = 25 // %
    const aiConversionRate = baseConversionRate * 1.3 // 30% improvement
    const additionalApprovals = Math.round((applications * (aiConversionRate - baseConversionRate)) / 100)

    return {
      costSavings: Math.round(costSavings),
      costSavingsPercentage,
      manualProcessingDays,
      aiProcessingDays,
      timeReduction,
      baseConversionRate,
      aiConversionRate: Math.round(aiConversionRate),
      additionalApprovals,
    }
  }

  const metrics = calculateMetrics()

  const handleCalculate = () => {
    setShowResults(true)
    setShowConfetti(true)
  }

  return (
    <>
      <ConfettiAnimation show={showConfetti} duration={4000} onComplete={() => setShowConfetti(false)} />

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            ROI Calculator
          </CardTitle>
          <CardDescription>
            See how much your organization can save by implementing AI-powered industry classification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="applications">Monthly Loan Applications</Label>
                  <span className="text-sm font-medium">{applications}</span>
                </div>
                <Slider
                  id="applications"
                  min={100}
                  max={5000}
                  step={100}
                  value={[applications]}
                  onValueChange={(value) => {
                    setApplications(value[0])
                    setShowResults(false)
                  }}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>100</span>
                  <span>5,000</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="team-size">Review Team Size</Label>
                  <span className="text-sm font-medium">{reviewTeamSize} people</span>
                </div>
                <Slider
                  id="team-size"
                  min={1}
                  max={50}
                  step={1}
                  value={[reviewTeamSize]}
                  onValueChange={(value) => {
                    setReviewTeamSize(value[0])
                    setShowResults(false)
                  }}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Team Location</Label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="onshore"
                      name="location"
                      value="onshore"
                      checked={location === "onshore"}
                      onChange={() => {
                        setLocation("onshore")
                        setShowResults(false)
                      }}
                      className="h-4 w-4 text-indigo-600"
                    />
                    <Label htmlFor="onshore" className="text-sm font-normal">
                      Onshore ($35/hr)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="offshore"
                      name="location"
                      value="offshore"
                      checked={location === "offshore"}
                      onChange={() => {
                        setLocation("offshore")
                        setShowResults(false)
                      }}
                      className="h-4 w-4 text-indigo-600"
                    />
                    <Label htmlFor="offshore" className="text-sm font-normal">
                      Offshore ($15/hr)
                    </Label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleCalculate} className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Calculate Savings
                </Button>
              </div>
            </div>

            {showResults && (
              <div className="pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Your Potential Savings with HyperVerge AI</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        <h3 className="font-medium">Cost Savings</h3>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        ${metrics.costSavings.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {metrics.costSavingsPercentage}% reduction in classification costs
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <h3 className="font-medium">Time Savings</h3>
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-1">{metrics.timeReduction} days</div>
                      <p className="text-sm text-muted-foreground">
                        {metrics.aiProcessingDays} days vs {metrics.manualProcessingDays} days
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-5 w-5 text-indigo-500" />
                        <h3 className="font-medium">Team Efficiency</h3>
                      </div>
                      <div className="text-3xl font-bold text-indigo-600 mb-1">5x</div>
                      <p className="text-sm text-muted-foreground">
                        Increase in applications processed per team member
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-5 w-5 text-amber-500" />
                        <h3 className="font-medium">Conversion Improvement</h3>
                      </div>
                      <div className="text-3xl font-bold text-amber-600 mb-1">{metrics.additionalApprovals}</div>
                      <p className="text-sm text-muted-foreground">
                        Additional approvals ({metrics.baseConversionRate}% → {metrics.aiConversionRate}%)
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-indigo-50 rounded-lg border border-indigo-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-indigo-800">
                        Ready to see these savings in your business?
                      </h4>
                      <p className="text-indigo-600">
                        Our team will create a custom ROI analysis for your specific needs.
                      </p>
                    </div>
                    <Button asChild className="bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
                      <a href="#book-demo" className="flex items-center gap-2">
                        Book a Demo <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Based on industry averages and customer data. Actual results may vary.
        </CardFooter>
      </Card>
    </>
  )
}
