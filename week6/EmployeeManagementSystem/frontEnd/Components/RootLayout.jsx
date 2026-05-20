import Header from './Header'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header stays at the top */}
      <Header />

      {/* Centered main content */}
      <div className="flex-grow flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
