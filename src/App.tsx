import { ReactElement } from 'react'
import Routing from './Routing'

function App (): ReactElement {
  return (
    <div className='app'>
      <div className='wave' />
      <main className='mobile-only template'>
        <Routing />
      </main>
    </div>
  )
}

export default App
