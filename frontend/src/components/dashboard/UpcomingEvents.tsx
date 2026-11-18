import { Link } from "react-router-dom"

const upcomingEvents = [
  {
    date: "24",
    month: "OCT",
    title: "AI & Machine Learning Workshop",
    details: "10:00 AM · Seminar Hall",
  },
  {
    date: "27",
    month: "OCT",
    title: "Inter-College Coding Contest",
    details: "2:00 PM · Computer Centre",
  },
  {
    date: "02",
    month: "NOV",
    title: "Technical Club Orientation",
    details: "11:00 AM · Main Auditorium",
  },
]

function UpcomingEvents() {
  return (
    <div className="rounded-xl border bg-background p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            Upcoming Events
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Stay updated with what is happening around campus.
          </p>
        </div>

        <Link
          to="/events"
          className="text-sm font-medium hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.title}
            className="flex gap-4 rounded-lg border p-4"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-muted">
              <span className="text-lg font-bold leading-none">
                {event.date}
              </span>

              <span className="mt-1 text-[10px] font-semibold text-muted-foreground">
                {event.month}
              </span>
            </div>

            <div>
              <h3 className="font-semibold">
                {event.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {event.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingEvents
