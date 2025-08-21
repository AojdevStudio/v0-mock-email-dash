import { Button } from "@/components/ui/button"
import { Calendar, Download, Settings } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">KD</span>
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg text-foreground">KC Ventures Dental</h2>
                <p className="text-xs text-muted-foreground">Payment Analytics</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Reports
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Settings
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
