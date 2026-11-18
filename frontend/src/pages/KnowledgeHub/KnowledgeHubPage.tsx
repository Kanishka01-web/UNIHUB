import { useMemo, useState } from "react"

import KnowledgeHeader from "@/components/knowledge/KnowledgeHeader"
import KnowledgeFilters from "@/components/knowledge/KnowledgeFilters"
import KnowledgeResourceCard from "@/components/knowledge/KnowledgeResourceCard"

type KnowledgeResource = {
  id: number
  category: string
  type: string
  title: string
  description: string
  author: string
  readTime: string
}

const resources: KnowledgeResource[] = [
  {
    id: 1,
    category: "Computer Science",
    type: "Article",
    title: "Introduction to Semantic Search",
    description:
      "Understand how semantic search uses meaning and context to improve academic information discovery.",
    author: "UNIHUB Knowledge Team",
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    type: "Guide",
    title: "Retrieval-Augmented Generation",
    description:
      "Learn how retrieval-augmented generation combines information retrieval with large language models.",
    author: "AI & ML Community",
    readTime: "12 min read",
  },
  {
    id: 3,
    category: "Development",
    type: "Tutorial",
    title: "Building APIs with FastAPI",
    description:
      "A practical introduction to designing modern Python APIs using FastAPI and asynchronous programming.",
    author: "Developer Community",
    readTime: "10 min read",
  },
  {
    id: 4,
    category: "Database",
    type: "Article",
    title: "Understanding Vector Databases",
    description:
      "Explore how vector representations can be stored and searched for semantic similarity.",
    author: "UNIHUB Knowledge Team",
    readTime: "7 min read",
  },
  {
    id: 5,
    category: "Artificial Intelligence",
    type: "Research Note",
    title: "Sentence Transformers",
    description:
      "Learn how sentence embeddings represent text meaning and support semantic similarity and recommendation systems.",
    author: "AI Research Group",
    readTime: "9 min read",
  },
  {
    id: 6,
    category: "Computer Science",
    type: "Study Note",
    title: "Fundamentals of Information Retrieval",
    description:
      "Review the core concepts behind indexing, ranking, retrieval and relevance in information systems.",
    author: "Computer Science Club",
    readTime: "11 min read",
  },
]

const categories = [
  "All",
  "Computer Science",
  "Artificial Intelligence",
  "Development",
  "Database",
]

function KnowledgeHubPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [bookmarkedResources, setBookmarkedResources] = useState<number[]>([])

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" ||
        resource.category === selectedCategory

      const matchesSearch =
        query === "" ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query) ||
        resource.type.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const handleBookmark = (id: number) => {
    setBookmarkedResources((current) =>
      current.includes(id)
        ? current.filter((resourceId) => resourceId !== id)
        : [...current, id],
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <KnowledgeHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="space-y-8 p-8">
        <section className="rounded-2xl bg-foreground p-8 text-background">
          <p className="text-sm font-medium opacity-70">
            Discover and learn
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Explore University Knowledge
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 opacity-75">
            Find academic resources, study material, technical guides and
            shared knowledge from the UNIHUB community.
          </p>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold tracking-tight">
              Browse by Category
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Narrow down resources based on your area of interest.
            </p>
          </div>

          <KnowledgeFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Knowledge Resources
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {filteredResources.length}{" "}
                {filteredResources.length === 1 ? "resource" : "resources"}{" "}
                available
              </p>
            </div>

            {bookmarkedResources.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {bookmarkedResources.length} bookmarked
              </p>
            )}
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredResources.map((resource) => (
                <KnowledgeResourceCard
                  key={resource.id}
                  resource={resource}
                  bookmarked={bookmarkedResources.includes(resource.id)}
                  onBookmark={handleBookmark}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border bg-background p-12 text-center">
              <h3 className="text-lg font-semibold">
                No resources found
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Try a different search term or select another category.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default KnowledgeHubPage
