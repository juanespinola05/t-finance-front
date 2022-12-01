import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import RedirectIfLogged from '../components/RedirectIfLogged'
import { routes } from './routes'

const Routing = (): ReactElement => {
  return (
    <Routes>
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
    </Routes>
  )
}

export default Routing
