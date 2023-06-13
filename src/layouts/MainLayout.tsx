import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='root-layout'>
      <header className='bg-black text-white border-b border-gray-500 py-4'>
        <div className='container mx-auto px-4'>
          <nav className='flex justify-between items-center'>
            <h1 className='text-xl font-bold'>
              <NavLink to='/'>Racing F1</NavLink>
            </h1>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default MainLayout
