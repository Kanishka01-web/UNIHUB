import ProfileHeader from "@/components/profile/ProfileHeader"
import ProfileInfoCard from "@/components/profile/ProfileInfoCard"
import ProfileStatsCard from "@/components/profile/ProfileStatsCard"
import ProfilePreferences from "@/components/profile/ProfilePreferences"

const profile = {
  name: "Kanishka",
  email: "kanishka@university.edu",
  studentId: "UNI2026CS001",
  department: "Computer Science & Engineering",
  year: "3rd Year",
  specialization: "Artificial Intelligence & Machine Learning",
}

const stats = {
  clubsJoined: 2,
  eventsRegistered: 3,
  resourcesBookmarked: 4,
  academicYear: "3rd Year",
}

function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <ProfileHeader
        name={profile.name}
        email={profile.email}
      />

      <main className="space-y-6 p-8">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <ProfileInfoCard profile={profile} />
          <ProfileStatsCard stats={stats} />
        </div>

        <ProfilePreferences
          initialKnowledgeCategory="AI & ML"
          initialEventCategory="Technology"
          initialNotifications={true}
        />
      </main>
    </div>
  )
}

export default ProfilePage
