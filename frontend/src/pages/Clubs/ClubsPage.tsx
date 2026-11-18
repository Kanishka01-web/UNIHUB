import { useMemo, useState } from "react"

import ClubsHeader from "@/components/clubs/ClubsHeader"
import ClubFilters from "@/components/clubs/ClubFilters"
import ClubCard from "@/components/clubs/ClubCard"

type Club = {
  id: number
  category: string
  name: string
  description: string
  members: number
  coordinator: string
}

const clubs: Club[] = [
  {
    id: 1,
    category: "Technology",
    name: "AI & ML Club",
    description:
      "Explore artificial intelligence, machine learning, generative AI and practical projects with fellow students.",
    members: 128,
    coordinator: "Student Technical Council",
  },
  {
    id: 2,
    category: "Technology",
    name: "Coding Club",
    description:
      "Practice problem solving, competitive programming and software development through coding sessions and contests.",
    members: 164,
    coordinator: "Computer Science Department",
  },
  {
    id: 3,
    category: "Technology",
    name: "Web Development Club",
    description:
      "Learn modern web technologies and collaborate on frontend, backend and full-stack development projects.",
    members: 96,
    coordinator: "Developer Community",
  },
  {
    id: 4,
    category: "Technology",
    name: "Cyber Security Club",
    description:
      "Build practical cybersecurity skills through security workshops, awareness sessions and hands-on challenges.",
    members: 82,
    coordinator: "Cyber Security Community",
  },
  {
    id: 5,
    category: "Technology",
    name: "Robotics Club",
    description:
      "Design, build and program robotic systems while working on hardware and automation projects.",
    members: 74,
    coordinator: "Engineering Community",
  },
  {
    id: 6,
    category: "Entrepreneurship",
    name: "Entrepreneurship Club",
    description:
      "Develop entrepreneurial thinking through startup discussions, idea building, innovation activities and networking.",
    members: 61,
    coordinator: "Innovation Cell",
  },
  {
    id: 7,
    category: "Literary",
    name: "Literary Club",
    description:
      "A community for students interested in writing, poetry, public speaking, debates and literary activities.",
    members: 88,
    coordinator: "Student Cultural Council",
  },
  {
    id: 8,
    category: "Arts & Culture",
    name: "Photography Club",
    description:
      "Explore photography, visual storytelling and creative expression while covering events across the university.",
    members: 57,
    coordinator: "Cultural Committee",
  },
]

const categories = [
  "All",
  "Technology",
  "Entrepreneurship",
  "Literary",
  "Arts & Culture",
]

function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [joinedClubs, setJoinedClubs] = useState<number[]>([])

  const filteredClubs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return clubs.filter((club) => {
      const matchesCategory =
        selectedCategory === "All" ||
        club.category === selectedCategory

      const matchesSearch =
        query === "" ||
        club.name.toLowerCase().includes(query) ||
        club.description.toLowerCase().includes(query) ||
        club.category.toLowerCase().includes(query) ||
        club.coordinator.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const handleJoin = (id: number) => {
    setJoinedClubs((current) =>
      current.includes(id)
        ? current.filter((clubId) => clubId !== id)
        : [...current, id],
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <ClubsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="space-y-8 p-8">
        <section className="rounded-2xl bg-foreground p-8 text-background">
          <p className="text-sm font-medium opacity-70">
            Connect and participate
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Discover Student Communities
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 opacity-75">
            Find clubs, communities and student groups that match your
            interests, develop new skills and connect with people across
            the university.
          </p>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold tracking-tight">
              Browse by Category
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Explore student communities based on your interests.
            </p>
          </div>

          <ClubFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Student Clubs
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {filteredClubs.length}{" "}
                {filteredClubs.length === 1 ? "club" : "clubs"} available
              </p>
            </div>

            {joinedClubs.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {joinedClubs.length}{" "}
                {joinedClubs.length === 1 ? "club" : "clubs"} joined
              </p>
            )}
          </div>

          {filteredClubs.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredClubs.map((club) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  joined={joinedClubs.includes(club.id)}
                  onJoin={handleJoin}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border bg-background p-12 text-center">
              <h3 className="text-lg font-semibold">
                No clubs found
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

export default ClubsPage
