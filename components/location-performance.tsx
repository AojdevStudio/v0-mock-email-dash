import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Location {
  name: string
  amount: number
  percentage: number
  color: string
}

interface LocationPerformanceProps {
  locations: Location[]
}

export function LocationPerformance({ locations }: LocationPerformanceProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-serif font-semibold text-card-foreground">Location Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {locations.map((location) => (
          <div key={location.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-foreground">{location.name}</span>
              <span className="font-bold text-primary">${location.amount.toLocaleString()}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-8 relative overflow-hidden">
              <div
                className="h-full rounded-full flex items-center px-3 text-slate-800 text-xs font-semibold transition-all duration-300"
                style={{
                  width: `${Math.max(location.percentage, 15)}%`,
                  backgroundColor: location.color,
                }}
              >
                {location.percentage}%
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
