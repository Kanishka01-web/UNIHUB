import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function AppLayout() {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <div className="flex h-full">
        <aside className="w-[275px] shrink-0 border-r bg-background">
          <Sidebar />
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout