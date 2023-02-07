import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import { BsGrid } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { TbChartPie, TbArrowsDownUp } from 'react-icons/tb'
import Operations from '../pages/Operations'

export const routes = [
  {
    path: '/',
    icon: () => <TbChartPie className='text-customGray text-2xl' />,
    render: false,
    isPrivate: false,
    element: <Home />
  },
  {
    path: '/dashboard',
    icon: () => <TbChartPie className='text-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <Dashboard />
  },
  {
    path: '/statistics',
    icon: () => <BsGrid className='fill-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <h1>Statistics</h1>
  },
  {
    path: '/new-operation',
    icon: () => <AiOutlinePlus className='fill-customGray text-5xl' />,
    render: true,
    isPrivate: true,
    element: <h1>New Operation</h1>
  },
  {
    path: '/operations',
    icon: () => <TbArrowsDownUp className='text-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <Operations />
  },
  {
    path: '/settings',
    icon: () => <IoSettingsOutline className='text-customGray text-2xl' />,
    render: true,
    isPrivate: true,
    element: <h1>Settings</h1>
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
  }
]
