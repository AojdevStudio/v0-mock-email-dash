import { DashboardHeader } from "@/components/dashboard-header"
import { KPICards } from "@/components/kpi-cards"
import { LocationPerformance } from "@/components/location-performance"
import { PaymentMethodBreakdown } from "@/components/payment-method-breakdown"
import { PerformanceAnalysis } from "@/components/performance-analysis"
import { RecommendedActions } from "@/components/recommended-actions"

// Sample data based on the provided dataset
const dashboardData = {
  totalCollections: 5946.51,
  activeLocations: 2,
  collectionStatus: "Normal",
  locations: [
    { name: "Humble", amount: 3530.21, percentage: 59.4, color: "hsl(var(--chart-1))" },
    { name: "Baytown", amount: 906.2, percentage: 15.2, color: "hsl(var(--chart-2))" },
  ],
  paymentMethods: [
    { method: "Credit Card Payments", amount: 3666.9, percentage: 61.7 },
    { method: "Third Party Financing", amount: 2046.51, percentage: 34.4 },
    { method: "Insurance Payments", amount: 339.0, percentage: 5.7 },
    { method: "Cash Payments", amount: 0.0, percentage: 0.0 },
  ],
  insights: [
    {
      type: "insight",
      title: "Strong Credit Card Performance",
      description:
        "Credit cards represent 61.7% of collections, indicating healthy patient payment capacity and effective payment processing systems.",
    },
    {
      type: "insight",
      title: "High Financing Utilization",
      description:
        "Third-party financing at 34.4% suggests successful case acceptance for higher-value dental treatments and effective patient financing education.",
    },
    {
      type: "alert",
      title: "Location Performance Gap",
      description:
        "Humble significantly outperformed Baytown with 59.4% of total collections. This warrants immediate attention to identify operational differences.",
    },
    {
      type: "insight",
      title: "Minimal Cash Transactions",
      description: "Zero cash payments reflect modern payment preferences and streamlined digital payment processes.",
    },
  ],
  actions: [
    {
      title: "Investigate Baytown Performance",
      description:
        "Review today's scheduling, patient volume, and operational efficiency. Identify factors contributing to lower collections compared to Humble location.",
    },
    {
      title: "Monitor Insurance Claims",
      description:
        "Follow up on pending insurance claims and verify timely submission processes. Low insurance percentage requires attention.",
    },
    {
      title: "Maintain Financing Momentum",
      description:
        "Continue promoting CareCredit, Cherry, and LendingClub options. Current 34.4% utilization indicates successful case acceptance strategies.",
    },
  ],
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Daily Payment Collections Report</h1>
          <p className="text-muted-foreground">Tuesday, August 20, 2025</p>
        </div>

        <KPICards data={dashboardData} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LocationPerformance locations={dashboardData.locations} />
          <PaymentMethodBreakdown methods={dashboardData.paymentMethods} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PerformanceAnalysis insights={dashboardData.insights} />
          <RecommendedActions actions={dashboardData.actions} />
        </div>
      </main>
    </div>
  )
}
