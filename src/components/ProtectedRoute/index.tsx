import { PropsWithChildren, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const ProtectedRoute = ({ children }: PropsWithChildren): ReactElement => {
  const { auth: { userInfo } } = useAuth()
  if (userInfo === null) {
    return <Navigate to='/login' />
  }
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
