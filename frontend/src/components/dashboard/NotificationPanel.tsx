import { useState } from "react"
import { Link } from "react-router-dom"

const notifications = [
  {
    title: "New AI & ML Workshop",
    message: "A new workshop has been added to upcoming events.",
    time: "10 minutes ago",
    path: "/events",
  },
  {
    title: "New Knowledge Resource",
    message:
      "A new resource on Retrieval-Augmented Generation is available.",
    time: "1 hour ago",
    path: "/knowledge-hub",
  },
  {
    title: "Club Update",
    message: "AI & ML Club has posted a new announcement.",
    time: "3 hours ago",
    path: "/clubs",
  },
]

function NotificationPanel() {
  const [read, setRead] = useState(false)

  return (
    <div className="absolute right-0 top-14 z-50 w-96 rounded-xl border bg-background p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Notifications</h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Your latest UNIHUB updates
          </p>
        </div>

        {!read && (
          <span className="rounded-full bg-foreground px-2 py-1 text-xs font-medium text-background">
            {notifications.length} new
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {notifications.map((notification) => (
          <Link
            key={notification.title}
            to={notification.path}
            className={`block rounded-lg p-3 transition hover:bg-muted ${
              read ? "opacity-60" : ""
            }`}
          >
            <p className="text-sm font-medium">
              {notification.title}
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {notification.message}
            </p>

            <p className="mt-2 text-[11px] text-muted-foreground">
              {notification.time}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-3 border-t pt-3">
        <button
          type="button"
          onClick={() => setRead(true)}
          disabled={read}
          className="w-full rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted disabled:cursor-default disabled:hover:bg-transparent"
        >
          {read ? "All notifications read" : "Mark all as read"}
        </button>
      </div>
    </div>
  )
}

export default NotificationPanel