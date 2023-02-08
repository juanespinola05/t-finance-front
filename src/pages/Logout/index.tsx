import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Logout = (): ReactElement => {
  const { auth, logOut } = useAuth()

  if (auth.userInfo !== null) {
    logOut()
  }
  return <Navigate to='/' />
}

export default Logout
