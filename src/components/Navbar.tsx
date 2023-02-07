import { ReactElement } from 'react'
import useAuth from '../hooks/useAuth'
import { routes } from '../Routing/routes'
import NavItem from './NavItem'

const Navbar = (): ReactElement | null => {
  const { auth: { userInfo } } = useAuth()

  if (userInfo === null) return null

  // todo: googlear fixed nav to logged in layout acaaa
  return (
    <nav className='bg-white drop-shadow-2xl min-[460px]:static fixed bottom-0 w-full h-[4rem]'>
      <ul className='flex items-center justify-center gap-4 h-full'>
        {
          routes.map(({ path, icon, render }) => (
            render
              ? <NavItem to={path} key={path}> {icon()} </NavItem>
              : null
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
