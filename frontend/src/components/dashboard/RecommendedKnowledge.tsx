import { Link } from "react-router-dom"

const recommendedKnowledge = [
  {
    category: "Computer Science",
    title: "Introduction to Semantic Search",
    description:
      "Understand how semantic search can improve academic information discovery.",
  },
  {
    category: "Artificial Intelligence",
    title: "Retrieval-Augmented Generation",
    description:
      "Learn how RAG combines information retrieval with generative AI.",
  },
  {
    category: "Development",
    title: "Building APIs with FastAPI",
    description:
      "A practical introduction to creating modern Python APIs.",
  },
]

function RecommendedKnowledge() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            Recommended Knowledge
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Resources selected based on your interests and activity.
          </p>
        </div>

        <Link
          to="/knowledge-hub"
          className="text-sm font-medium hover:underline"
        >
          Explore Knowledge Hub
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {recommendedKnowledge.map((resource) => (
          <div
            key={resource.title}
            className="rounded-xl border bg-background p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {resource.category}
            </p>

            <h3 className="mt-3 text-lg font-semibold">
              {resource.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {resource.description}
            </p>

            <Link
              to="/knowledge-hub"
              className="mt-5 inline-block text-sm font-medium hover:underline"
            >
              Read resource →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecommendedKnowledge
