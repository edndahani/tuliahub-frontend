import Header from '../header'
import AppSidebar from '../app-sidebar'
import { Outlet } from 'react-router-dom'

const AppLayout = ({isLogin}: {isLogin: boolean}) => {
  return (
    <>
      <Header isLogin={isLogin} />
      <div className='mt-16'>
        <AppSidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout