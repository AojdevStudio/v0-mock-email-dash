import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingUp } from "lucide-react"

interface Insight {
  type: "insight" | "alert"
  title: string
  description: string
}

interface PerformanceAnalysisProps {
  insights: Insight[]
}

export function PerformanceAnalysis({ insights }: PerformanceAnalysisProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-serif font-semibold text-card-foreground">Performance Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                insight.type === "alert" ? "bg-yellow-50 border-l-yellow-400" : "bg-muted border-l-primary"
              }`}
            >
              <div className="flex items-start space-x-3">
                {insight.type === "alert" ? (
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
