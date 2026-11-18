type EventsHeaderProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
}

function EventsHeader({
  searchQuery,
  onSearchChange,
}: EventsHeaderProps) {
  return (
    <header className="border-b bg-background">
      <div className="flex min-h-20 items-center justify-between gap-6 px-8">
        <div>
          <p className="text-sm text-muted-foreground">
            UNIHUB
          </p>

          <h1 className="text-2xl font-bold tracking-tight">
            Events & Activities
          </h1>
        </div>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search events..."
            className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-foreground"
          />
        </div>
      </div>
    </header>
  )
}

export default EventsHeader
