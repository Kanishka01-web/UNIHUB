import { useState } from "react"

type ProfilePreferencesProps = {
  initialKnowledgeCategory: string
  initialEventCategory: string
  initialNotifications: boolean
}

function ProfilePreferences({
  initialKnowledgeCategory,
  initialEventCategory,
  initialNotifications,
}: ProfilePreferencesProps) {
  const [knowledgeCategory, setKnowledgeCategory] = useState(
    initialKnowledgeCategory,
  )

  const [eventCategory, setEventCategory] = useState(
    initialEventCategory,
  )

  const [notifications, setNotifications] = useState(
    initialNotifications,
  )

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2000)
  }

  return (
    <section className="rounded-xl border bg-background p-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight">
          Preferences
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Customize your UNIHUB experience based on your interests.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="knowledge-category"
            className="text-sm font-medium"
          >
            Preferred Knowledge Category
          </label>

          <select
            id="knowledge-category"
            value={knowledgeCategory}
            onChange={(event) => setKnowledgeCategory(event.target.value)}
            className="mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-foreground"
          >
            <option value="All">All Categories</option>
            <option value="AI & ML">AI & ML</option>
            <option value="Web Development">Web Development</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="event-category"
            className="text-sm font-medium"
          >
            Preferred Event Category
          </label>

          <select
            id="event-category"
            value={eventCategory}
            onChange={(event) => setEventCategory(event.target.value)}
            className="mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-foreground"
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Career">Career</option>
            <option value="Cultural">Cultural</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Sports">Sports</option>
            <option value="Literary">Literary</option>
          </select>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
          <div>
            <p className="text-sm font-medium">
              Event & Activity Notifications
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Receive updates about events, clubs and university activities.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setNotifications((current) => !current)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition ${
              notifications
                ? "bg-foreground"
                : "bg-muted"
            }`}
            aria-label="Toggle notifications"
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-background transition ${
                notifications
                  ? "left-6"
                  : "left-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 border-t pt-5">
          <p
            className={`text-sm ${
              saved
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {saved
              ? "Preferences saved successfully."
              : "Changes are currently stored locally."}
          </p>

          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProfilePreferences
