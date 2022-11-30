import { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Routing from './Routing'

function App (): ReactElement {
  return (
    <div className='app'>
      <main className='mobile-only template'>
        <div>
          <Routing />
        </div>
        <Navbar />
      </main>
    </div>
  )
}

export default App
