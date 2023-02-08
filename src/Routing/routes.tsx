import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import { BsFillBarChartFill, BsPlusLg } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5'
import { FaList } from 'react-icons/fa'
import Operations from '../pages/Operations'
import NewOperation from '../pages/NewOperation'
import Settings from '../pages/Setings'
import Statistics from '../pages/Statistics'
import SignUp from '../pages/SignUp'

export const routes = [
  {
    path: '/',
    icon: () => <AiFillHome className='text-customGray text-2xl' />,
    render: false,
    isPrivate: false,
    element: <Home />
  },
  {
    path: '/dashboard',
    icon: () => <AiFillHome className='text-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <Dashboard />
  },
  {
    path: '/statistics',
    icon: () => <BsFillBarChartFill className='fill-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <Statistics />
  },
  {
    path: '/new-operation',
    icon: () => <BsPlusLg className='fill-customGray text-4xl' />,
    render: true,
    isPrivate: true,
    element: <NewOperation />
  },
  {
    path: '/operations',
    icon: () => <FaList className='text-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <Operations />
  },
  {
    path: '/settings',
    icon: () => <IoSettingsSharp className='text-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <Settings />
  },
  {
    path: '/login',
    icon: () => <IoSettingsOutline className='text-customGray text-2xl' />,
    render: false,
    isPrivate: false,
    element: <Login />
  },
  {
    path: '/logout',
    icon: () => <IoSettingsOutline className='text-customGray text-2xl' />,
    render: false,
    isPrivate: true,
    element: <Logout />
  },
  {
    path: '/sign-up',
    icon: () => <IoSettingsOutline className='text-customGray text-2xl' />,
    render: false,
    isPrivate: false,
    element: <SignUp />
  }
]
