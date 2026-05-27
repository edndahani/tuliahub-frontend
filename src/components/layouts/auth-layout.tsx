import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='min-h-svh w-full flex items-center justify-center px-2 py-2'>
      <Outlet />
    </main>
  )
}

export default AuthLayout