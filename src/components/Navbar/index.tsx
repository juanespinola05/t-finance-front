import { ReactElement } from 'react'
import { routes } from '../../Routing/routes'
import NavItem from '../NavItem'

const Navbar = (): ReactElement => {
  return (
    <nav className='bg-white drop-shadow-2xl'>
      <ul className='flex items-center justify-center gap-4 h-full'>
        {
          routes.map(({ path, icon }) => (
            <NavItem to={path} key={path}>
              {icon()}
            </NavItem>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
