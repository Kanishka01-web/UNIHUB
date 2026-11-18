import { Link } from "react-router-dom"

const quickAccess = [
  {
    title: "Knowledge Hub",
    description:
      "Explore notes, resources and shared academic knowledge.",
    path: "/knowledge-hub",
  },
  {
    title: "Clubs",
    description:
      "Discover student clubs and communities across campus.",
    path: "/clubs",
  },
  {
    title: "Events",
    description:
      "Find upcoming workshops, competitions and activities.",
    path: "/events",
  },
  {
    title: "My Profile",
    description:
      "View and manage your academic and student profile.",
    path: "/profile",
  },
]

function QuickAccess() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-tight">
          Quick Access
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Jump directly to the parts of UNIHUB you use most.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickAccess.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="group rounded-xl border bg-background p-5 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-5 text-muted-foreground">
              {item.description}
            </p>

            <p className="mt-5 text-sm font-medium">
              Explore →
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default QuickAccess
