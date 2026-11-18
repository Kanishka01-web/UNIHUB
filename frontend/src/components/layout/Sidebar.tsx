import { NavLink } from "react-router-dom"

const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Knowledge Hub",
    path: "/knowledge-hub",
  },
  {
    label: "Clubs",
    path: "/clubs",
  },
  {
    label: "Events",
    path: "/events",
  },
  {
    label: "Profile",
    path: "/profile",
  },
]

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-background flex flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="text-2xl font-bold tracking-tight">
          UNIHUB
        </h1>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="border-t p-4">
        <NavLink
          to="/login"
          className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          Logout
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar