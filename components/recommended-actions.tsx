import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Action {
  title: string
  description: string
}

interface RecommendedActionsProps {
  actions: Action[]
}

export function RecommendedActions({ actions }: RecommendedActionsProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-serif font-semibold text-card-foreground">Recommended Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actions.map((action, index) => (
            <div key={index} className="bg-blue-50 border-l-4 border-l-blue-400 p-4 rounded-lg relative pl-12">
              <div className="absolute left-4 top-4 w-6 h-6 bg-blue-500 text-blue-50 rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{action.title}</h4>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
