import { Link } from "react-router-dom"
import NotificationPanel from "@/components/dashboard/NotificationPanel"

type DashboardHeaderProps = {
  notificationsOpen: boolean
  onNotificationsToggle: () => void
}

function DashboardHeader({
  notificationsOpen,
  onNotificationsToggle,
}: DashboardHeaderProps) {
  return (
    <header className="border-b bg-background">
      <div className="flex h-20 items-center justify-between gap-6 px-8">
        <div>
          <p className="text-sm text-muted-foreground">
            UNIHUB
          </p>

          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search UNIHUB..."
            className="hidden w-72 rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-foreground sm:block"
          />

          <div className="relative">
            <button
              type="button"
              onClick={onNotificationsToggle}
              className="rounded-lg border bg-background px-3 py-2 text-sm font-medium transition hover:bg-muted"
            >
              Notifications
            </button>

            {notificationsOpen && <NotificationPanel />}
          </div>

          <Link
            to="/profile"
            className="flex items-center gap-3 rounded-lg border bg-background px-3 py-2 transition hover:bg-muted"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              K
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold">
                Kanishka
              </p>

              <p className="text-xs text-muted-foreground">
                Student
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
