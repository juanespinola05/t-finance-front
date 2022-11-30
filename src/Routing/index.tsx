import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const Routing = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Home />} />
      <Route path='/new-operation' element={<Home />} />
      <Route path='/operations' element={<Home />} />
      <Route path='/settings' element={<Home />} />
    </Routes>
  )
}

export default Routing
