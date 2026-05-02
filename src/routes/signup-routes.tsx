import App from '@/App'
import Login from '@/pages/login'
import { Route, Routes } from 'react-router-dom'

const SignUpRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default SignUpRoutes