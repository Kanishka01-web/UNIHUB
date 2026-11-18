type Club = {
  id: number
  category: string
  name: string
  description: string
  members: number
  coordinator: string
}

type ClubCardProps = {
  club: Club
  joined: boolean
  onJoin: (id: number) => void
}

function ClubCard({
  club,
  joined,
  onJoin,
}: ClubCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-background p-6 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          {club.category}
        </span>

        <button
          type="button"
          onClick={() => onJoin(club.id)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            joined
              ? "bg-foreground text-background"
              : "border hover:bg-muted"
          }`}
        >
          {joined ? "Joined" : "Join Club"}
        </button>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-semibold tracking-tight">
          {club.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {club.description}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
          <span>{club.members} members</span>
          <span>{club.coordinator}</span>
        </div>
      </div>
    </article>
  )
}

export default ClubCard
