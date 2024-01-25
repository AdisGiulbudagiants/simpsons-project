import { Outlet } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'
import { Suspense } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="h-[100vh] flex items-center justify-center">
            <FaSpinner className="animate-spin-slow" size={80} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout
