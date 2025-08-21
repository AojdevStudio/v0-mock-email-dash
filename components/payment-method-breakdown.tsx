import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PaymentMethod {
  method: string
  amount: number
  percentage: number
}

interface PaymentMethodBreakdownProps {
  methods: PaymentMethod[]
}

export function PaymentMethodBreakdown({ methods }: PaymentMethodBreakdownProps) {
  const getColorForMethod = (index: number) => {
    const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"]
    return colors[index % colors.length]
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-serif font-semibold text-card-foreground">
          Payment Method Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {methods.map((method, index) => (
            <div key={method.method} className="bg-muted border border-border p-4 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">{method.method}</div>
              <div className="text-lg font-bold text-foreground">${method.amount.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">{method.percentage}% of total</div>
              <div className="mt-2 w-full bg-background rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.max(method.percentage, 5)}%`,
                    backgroundColor: getColorForMethod(index),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
