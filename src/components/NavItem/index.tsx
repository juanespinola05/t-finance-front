import { PropsWithChildren, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps extends PropsWithChildren {
  to: string
}

const NavItem = ({ children, to }: NavItemProps): ReactElement => {
  return (
    <li className='h-full w-16'>
      <NavLink to={to} className='w-full h-full grid place-content-center'>
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem
