type Event = {
  id: number
  category: string
  title: string
  description: string
  date: string
  month: string
  time: string
  venue: string
  organizer: string
}

type EventCardProps = {
  event: Event
  registered: boolean
  onRegister: (id: number) => void
}

function EventCard({
  event,
  registered,
  onRegister,
}: EventCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-background p-6 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          {event.category}
        </span>

        <button
          type="button"
          onClick={() => onRegister(event.id)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            registered
              ? "bg-foreground text-background"
              : "border hover:bg-muted"
          }`}
        >
          {registered ? "Registered" : "Register"}
        </button>
      </div>

      <div className="mt-5 flex gap-4">
        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-muted">
          <span className="text-xl font-bold leading-none">
            {event.date}
          </span>

          <span className="mt-1 text-[10px] font-semibold text-muted-foreground">
            {event.month}
          </span>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            {event.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {event.description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="space-y-2 border-t pt-4 text-xs text-muted-foreground">
          <div className="flex justify-between gap-4">
            <span>Time</span>
            <span className="text-right font-medium text-foreground">
              {event.time}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span>Venue</span>
            <span className="text-right font-medium text-foreground">
              {event.venue}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span>Organizer</span>
            <span className="text-right font-medium text-foreground">
              {event.organizer}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default EventCard
