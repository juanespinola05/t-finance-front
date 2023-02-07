import { FC, ReactElement, useEffect } from 'react'
import MonthSwitcher from './MonthSwitcher'
import TotalAmount from './TotalAmount'
import { useAppDispatch, useAppSelector } from '../store/store'
import Spinner from './Spinner'
import { getBalances } from '../store/actions/balance.actions'
import { formatCurrency } from '../utils/intl'

const DashboardBanner: FC = (): ReactElement => {
  const dispatch = useAppDispatch()
  const {
    app: { period },
    balance: {
      totalIncome,
      totalOutflow,
      loading
    }
  } = useAppSelector(state => state)

  useEffect(() => {
    const promise = dispatch(getBalances(period))

    return () => {
      promise.abort()
    }
  }, [period])

  return (
    <div>
      {
        loading && (
          <div className='absolute left-0 top-0 bottom-16 right-0 m-auto z-10 backdrop-blur-[2px]'>
            <Spinner />
          </div>
        )
      }
      <div className='relative mb-14'>
        <div className='font-roboto h-[18em] bg-blue text-center text-white grid place-content-center'>
          <div className='flex flex-col'>
            <p className='text-lg font-light'>Balance</p>
            <p className='text-5xl font-bold mb-6'>${formatCurrency(totalOutflow + totalIncome) ?? '0'}</p>
            <MonthSwitcher />
          </div>
        </div>
        <div className='flex justify-around absolute h-20 rounded-2xl w-[90%] left-0 right-0 mx-auto bottom-[-40px] bg-white'>
          <TotalAmount amount={formatCurrency(totalIncome)} type='income' />
          <TotalAmount amount={formatCurrency(totalOutflow)} type='outflow' />
        </div>
      </div>
    </div>
  )
}

export default DashboardBanner
