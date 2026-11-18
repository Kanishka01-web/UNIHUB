type KnowledgeResource = {
  id: number
  category: string
  type: string
  title: string
  description: string
  author: string
  readTime: string
}

type KnowledgeResourceCardProps = {
  resource: KnowledgeResource
  bookmarked: boolean
  onBookmark: (id: number) => void
}

function KnowledgeResourceCard({
  resource,
  bookmarked,
  onBookmark,
}: KnowledgeResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-background p-6 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          {resource.category}
        </span>

        <button
          type="button"
          onClick={() => onBookmark(resource.id)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            bookmarked
              ? "bg-foreground text-background"
              : "border hover:bg-muted"
          }`}
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {resource.type}
        </p>

        <h2 className="mt-2 text-lg font-semibold tracking-tight">
          {resource.title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {resource.description}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
          <span>{resource.author}</span>
          <span>{resource.readTime}</span>
        </div>
      </div>
    </article>
  )
}

export default KnowledgeResourceCard
