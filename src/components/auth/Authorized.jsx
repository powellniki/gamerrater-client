import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "../nav/NavBar.jsx"

export const Authorized = () => {
  if (localStorage.getItem("rock_token")) {
    return <>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  }
  return <Navigate to='/login' replace />
}
