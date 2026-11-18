const recentActivity = [
  "You viewed Semantic Search resources.",
  "You joined the AI & ML Club.",
  "You bookmarked a Machine Learning resource.",
]

function RecentActivity() {
  return (
    <div className="rounded-xl border bg-background p-6">
      <h2 className="text-xl font-bold tracking-tight">
        Recent Activity
      </h2>

      <p className="mt-1 text-sm text-muted-foreground">
        Your latest activity on UNIHUB.
      </p>

      <div className="mt-6 space-y-5">
        {recentActivity.map((activity) => (
          <div
            key={activity}
            className="flex gap-3"
          >
            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-foreground" />

            <p className="text-sm leading-5 text-muted-foreground">
              {activity}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
