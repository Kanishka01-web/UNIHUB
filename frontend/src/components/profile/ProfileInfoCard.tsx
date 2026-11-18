type ProfileInfo = {
  name: string
  email: string
  studentId: string
  department: string
  year: string
  specialization: string
}

type ProfileInfoCardProps = {
  profile: ProfileInfo
}

function ProfileInfoCard({
  profile,
}: ProfileInfoCardProps) {
  return (
    <section className="rounded-xl border bg-background p-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your basic university profile information.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Full Name
          </p>
          <p className="mt-1 text-sm font-medium">
            {profile.name}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Email Address
          </p>
          <p className="mt-1 text-sm font-medium">
            {profile.email}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Student ID
          </p>
          <p className="mt-1 text-sm font-medium">
            {profile.studentId}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Department
          </p>
          <p className="mt-1 text-sm font-medium">
            {profile.department}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Academic Year
          </p>
          <p className="mt-1 text-sm font-medium">
            {profile.year}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Specialization
          </p>
          <p className="mt-1 text-sm font-medium">
            {profile.specialization}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileInfoCard
