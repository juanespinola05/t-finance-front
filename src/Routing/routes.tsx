import { BsGrid } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { TbChartPie, TbArrowsDownUp } from 'react-icons/tb'

export const routes = [
  {
    path: '/',
    icon: () => <BsGrid className='fill-customGray text-2xl' />
  },
  {
    path: '/dashboard',
    icon: () => <TbChartPie className='text-customGray text-2xl' />
  },
  {
    path: '/new-operation',
    icon: () => <AiOutlinePlus className='fill-customGray text-5xl' />
  },
  {
    path: '/operations',
    icon: () => <TbArrowsDownUp className='text-customGray text-2xl' />
  },
  {
    path: '/settings',
    icon: () => <IoSettingsOutline className='text-customGray text-2xl' />
  }
]
