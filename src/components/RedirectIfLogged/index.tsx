import { PropsWithChildren, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RedirectIfLogged = ({ children }: PropsWithChildren): ReactElement => {
  const { auth: { userInfo } } = useAuth()
  if (userInfo !== null) {
    return <Navigate to='/dashboard' />
  }
  return (
    <>
      {children}
    </>
  )
}

export default RedirectIfLogged
