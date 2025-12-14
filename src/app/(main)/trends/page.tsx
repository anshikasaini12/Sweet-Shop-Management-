'use client'

import React, { useState, useTransition } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BrainCircuit, Loader2 } from 'lucide-react'
import { getTrendPredictions } from './actions'
import type { PredictionChoicesOutput } from '@/ai/flows/provide-prediction-choices'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function TrendsPage() {
  const [isPending, startTransition] = useTransition()
  const [predictions, setPredictions] =
    useState<PredictionChoicesOutput | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyzeTrends = () => {
    startTransition(async () => {
      setError(null)
      const result = await getTrendPredictions()
      if (result.success) {
        setPredictions(result.data)
      } else {
        setError(result.error)
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Trend Analysis</CardTitle>
        <CardDescription>
          Predict top-selling products and target demographics using AI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        {isPending && (
          <div className="flex items-center justify-center rounded-lg border border-dashed p-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <h3 className="text-xl font-bold tracking-tight">
                Analyzing Trends...
              </h3>
              <p className="text-sm text-muted-foreground">
                Our AI is processing the data. Please wait a moment.
              </p>
            </div>
          </div>
        )}
        {predictions && !isPending && (
          <Accordion type="single" collapsible className="w-full">
            {predictions.predictions.map((p, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-2 pr-4">
                    <p className="font-semibold">{p.trendSummary}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Certainty</span>
                      <Progress value={p.certainty * 100} className="w-32" />
                      <span>{Math.round(p.certainty * 100)}%</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <div>
                    <h4 className="font-semibold">Target Demographics</h4>
                    <p className="text-muted-foreground">
                      {p.targetDemographics}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sales Focus Guidance</h4>
                    <p className="text-muted-foreground">{p.salesFocus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Validity Factors</h4>
                    <p className="text-muted-foreground">{p.validity}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleAnalyzeTrends} disabled={isPending}>
          <BrainCircuit className="mr-2 h-4 w-4" />
          {predictions ? 'Re-analyze Trends' : 'Analyze Trends'}
        </Button>
      </CardFooter>
    </Card>
  )
}
