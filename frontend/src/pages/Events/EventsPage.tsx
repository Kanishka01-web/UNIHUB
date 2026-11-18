import { useMemo, useState } from "react"

import EventsHeader from "@/components/events/EventsHeader"
import EventFilters from "@/components/events/EventFilters"
import EventCard from "@/components/events/EventCard"

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

const events: Event[] = [
  {
    id: 1,
    category: "Technology",
    title: "AI & Machine Learning Workshop",
    description:
      "Learn the fundamentals of machine learning and explore practical applications of modern AI technologies.",
    date: "12",
    month: "OCT",
    time: "10:00 AM - 1:00 PM",
    venue: "Innovation Lab",
    organizer: "AI & ML Club",
  },
  {
    id: 2,
    category: "Technology",
    title: "Web Development Bootcamp",
    description:
      "Build modern web applications while learning frontend development, backend integration and deployment.",
    date: "15",
    month: "OCT",
    time: "11:00 AM - 3:00 PM",
    venue: "Computer Lab 2",
    organizer: "Web Development Club",
  },
  {
    id: 3,
    category: "Cultural",
    title: "University Cultural Fest",
    description:
      "Celebrate creativity, music, dance, art and culture with students from across the university.",
    date: "18",
    month: "OCT",
    time: "5:00 PM - 9:00 PM",
    venue: "Main Auditorium",
    organizer: "Student Cultural Council",
  },
  {
    id: 4,
    category: "Career",
    title: "Career & Internship Fair",
    description:
      "Meet recruiters, explore internship opportunities and learn about career paths from industry professionals.",
    date: "22",
    month: "OCT",
    time: "10:00 AM - 4:00 PM",
    venue: "University Convention Hall",
    organizer: "Training & Placement Cell",
  },
  {
    id: 5,
    category: "Entrepreneurship",
    title: "Startup Idea Pitch",
    description:
      "Present innovative startup ideas, receive feedback from mentors and connect with aspiring entrepreneurs.",
    date: "25",
    month: "OCT",
    time: "2:00 PM - 5:00 PM",
    venue: "Innovation Centre",
    organizer: "Entrepreneurship Club",
  },
  {
    id: 6,
    category: "Sports",
    title: "Inter-Department Sports Meet",
    description:
      "Compete across departments in a variety of indoor and outdoor sporting activities.",
    date: "28",
    month: "OCT",
    time: "8:00 AM - 5:00 PM",
    venue: "University Sports Complex",
    organizer: "Sports Committee",
  },
  {
    id: 7,
    category: "Literary",
    title: "Debate & Public Speaking Session",
    description:
      "Develop communication skills through debates, public speaking activities and interactive discussions.",
    date: "30",
    month: "OCT",
    time: "3:00 PM - 5:00 PM",
    venue: "Seminar Hall",
    organizer: "Literary Club",
  },
  {
    id: 8,
    category: "Technology",
    title: "Cyber Security Awareness Session",
    description:
      "Understand common cybersecurity threats and learn practical techniques for protecting personal information.",
    date: "02",
    month: "NOV",
    time: "12:00 PM - 2:00 PM",
    venue: "Lecture Hall 3",
    organizer: "Cyber Security Club",
  },
]

const categories = [
  "All",
  "Technology",
  "Cultural",
  "Career",
  "Entrepreneurship",
  "Sports",
  "Literary",
]

function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([])

  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return events.filter((event) => {
      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory

      const matchesSearch =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const handleRegister = (id: number) => {
    setRegisteredEvents((current) =>
      current.includes(id)
        ? current.filter((eventId) => eventId !== id)
        : [...current, id],
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <EventsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="space-y-8 p-8">
        <section className="rounded-2xl bg-foreground p-8 text-background">
          <p className="text-sm font-medium opacity-70">
            Discover and participate
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            University Events & Activities
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 opacity-75">
            Discover workshops, cultural activities, career opportunities,
            competitions and other events happening across the university.
          </p>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold tracking-tight">
              Browse by Category
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Explore events based on your interests.
            </p>
          </div>

          <EventFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Upcoming Events
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {filteredEvents.length}{" "}
                {filteredEvents.length === 1 ? "event" : "events"} available
              </p>
            </div>

            {registeredEvents.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {registeredEvents.length}{" "}
                {registeredEvents.length === 1 ? "event" : "events"} registered
              </p>
            )}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  registered={registeredEvents.includes(event.id)}
                  onRegister={handleRegister}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border bg-background p-12 text-center">
              <h3 className="text-lg font-semibold">
                No events found
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

export default EventsPage
