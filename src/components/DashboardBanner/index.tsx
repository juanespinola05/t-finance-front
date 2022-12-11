import { FC, ReactElement } from 'react'
import MonthSwitcher from '../MonthSwitcher'
import TotalAmount from '../TotalAmount'
import { useAppSelector } from '../../store/store'
import Spinner from '../Loading/Spinner'

const DashboardBanner: FC = (): ReactElement => {
  const { balance, totalIncome, totalOutflow, loading } = useAppSelector(state => state.balance)

  return (
    <>
      {
        loading && (
          <Spinner />
        )
      }
      <div className={loading ? 'blur-[1px]' : ''}>
        <div className='font-roboto h-[18em] bg-blue text-center text-white grid place-content-center'>
          <div className='flex flex-col'>
            <p className='text-lg font-light'>Balance</p>
            <p className='text-5xl font-bold mb-6'>${balance}</p>
            <MonthSwitcher />
          </div>
        </div>
        <div className='flex justify-around relative h-20 rounded-2xl w-[90%] m-auto top-[-40px] bg-white'>
          <TotalAmount amount={totalIncome} type='income' />
          <TotalAmount amount={totalOutflow} type='outflow' />
        </div>
      </div>
    </>
  )
}

export default DashboardBanner
