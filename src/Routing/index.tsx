import { ReactElement } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ProtectedRoute from '../components/ProtectedRoute'
import RedirectIfLogged from '../components/RedirectIfLogged'
import { routes } from './routes'
import Home from '../pages/Home'

const Routing = (): ReactElement => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        {
          routes.map(({ element, path, isPrivate }) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                isPrivate
                  ? <ProtectedRoute> {element} </ProtectedRoute>
                  : <RedirectIfLogged> {element} </RedirectIfLogged>
                }
              />
            )
          })
        }
        <Route path='*' element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Routing
