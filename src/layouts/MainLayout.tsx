import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useStore } from '../store/useStore'

const MainLayout = () => {
  useStore()

  return (
    <div className={`min-h-screen gradient-bg theme-transition`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout