import { ReactElement } from 'react'
import Routing from './Routing'

function App (): ReactElement {
  return (
    <div className='app'>
      <div className='wave' />
      <main className='mobile-only'>
        <div className='template'>
          <Routing />
        </div>
      </main>
    </div>
  )
}

export default App
