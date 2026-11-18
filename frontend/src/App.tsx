import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AppLayout from "@/components/layout/AppLayout"

import LoginPage from "@/pages/Login/LoginPage"
import DashboardPage from "@/pages/Dashboard/DashboardPage"
import KnowledgeHubPage from "@/pages/KnowledgeHub/KnowledgeHubPage"
import ClubsPage from "@/pages/Clubs/ClubsPage"
import EventsPage from "@/pages/Events/EventsPage"
import ProfilePage from "@/pages/Profile/ProfilePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App