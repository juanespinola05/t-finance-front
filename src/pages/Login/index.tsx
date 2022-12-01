import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = (): ReactElement => {
  const { auth: { userInfo } } = useAuth()

  if (userInfo !== null) return <Navigate to='/dashboard' />

  return (
    <div>
      <h1>Login here bro</h1>
    </div>
  )
}

export default Login
