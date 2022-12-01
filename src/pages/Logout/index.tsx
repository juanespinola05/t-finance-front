import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Logout = (): ReactElement => {
  const { auth } = useAuth()
  console.log(auth)

  if (auth.userInfo === null) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div>
      <h1>Logout here bro</h1>
    </div>
  )
}

export default Logout
