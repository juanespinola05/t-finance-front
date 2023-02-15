import { ReactElement, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Logout = (): ReactElement => {
  const { logOut } = useAuth()

  const removeTokenAndDispatchLogout = async (): Promise<void> => {
    await logOut()
  }
  useEffect(() => {
    void removeTokenAndDispatchLogout()
  }, [])
  return <Navigate to='/login' />
}

export default Logout
