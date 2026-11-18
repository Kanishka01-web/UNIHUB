type ProfileHeaderProps = {
  name: string
  email: string
}

function ProfileHeader({
  name,
  email,
}: ProfileHeaderProps) {
  return (
    <header className="border-b bg-background">
      <div className="flex min-h-20 items-center justify-between gap-6 px-8">
        <div>
          <p className="text-sm text-muted-foreground">
            UNIHUB
          </p>

          <h1 className="text-2xl font-bold tracking-tight">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage your personal information and university preferences.
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold">
            {name}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {email}
          </p>
        </div>
      </div>
    </header>
  )
}

export default ProfileHeader
