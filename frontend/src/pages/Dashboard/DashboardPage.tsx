import { useState } from "react"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import WelcomeBanner from "@/components/dashboard/WelcomeBanner"
import QuickAccess from "@/components/dashboard/QuickAccess"
import UpcomingEvents from "@/components/dashboard/UpcomingEvents"
import RecentActivity from "@/components/dashboard/RecentActivity"
import RecommendedKnowledge from "@/components/dashboard/RecommendedKnowledge"

function DashboardPage() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader
        notificationsOpen={notificationsOpen}
        onNotificationsToggle={() =>
          setNotificationsOpen((open) => !open)
        }
      />

      <main className="space-y-8 p-8">
        <WelcomeBanner />

        <QuickAccess />

        <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <UpcomingEvents />
          <RecentActivity />
        </section>

        <RecommendedKnowledge />
      </main>
    </div>
  )
}

export default DashboardPage
