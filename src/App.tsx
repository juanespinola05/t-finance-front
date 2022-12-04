import { ReactElement, useEffect } from 'react'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import useAuth from './hooks/useAuth'
import Routing from './Routing'

function App (): ReactElement {
  const { getToken, auth: { loading } } = useAuth()

  useEffect(() => {
    getToken()
  }, [])
  if (loading) return <Loading />

  return (
    <div className='app'>
      <div className='wave' />
      <main className='mobile-only template'>
        <Routing />
        <Navbar />
      </main>
    </div>
  )
}

export default App
