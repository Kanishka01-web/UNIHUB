type ProfileStats = {
  clubsJoined: number
  eventsRegistered: number
  resourcesBookmarked: number
  academicYear: string
}

type ProfileStatsCardProps = {
  stats: ProfileStats
}

function ProfileStatsCard({
  stats,
}: ProfileStatsCardProps) {
  return (
    <section className="rounded-xl border bg-background p-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight">
          Activity Summary
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          A quick overview of your UNIHUB activity.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Clubs Joined
          </p>

          <p className="mt-2 text-2xl font-bold">
            {stats.clubsJoined}
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Events Registered
          </p>

          <p className="mt-2 text-2xl font-bold">
            {stats.eventsRegistered}
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Resources Bookmarked
          </p>

          <p className="mt-2 text-2xl font-bold">
            {stats.resourcesBookmarked}
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Academic Year
          </p>

          <p className="mt-2 text-2xl font-bold">
            {stats.academicYear}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileStatsCard
