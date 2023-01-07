import { FC, ReactElement, useEffect } from 'react'
import MonthSwitcher from '../MonthSwitcher'
import TotalAmount from '../TotalAmount'
import { useAppDispatch, useAppSelector } from '../../store/store'
import Spinner from '../Loading/Spinner'
import { getBalances } from '../../store/actions/balance.actions'

const DashboardBanner: FC = (): ReactElement => {
  const dispatch = useAppDispatch()
  const {
    app: { period },
    balance: {
      balance,
      totalIncome,
      totalOutflow,
      loading
    }
  } = useAppSelector(state => state)

  useEffect(() => {
    const promise = dispatch(getBalances())

    return () => {
      promise.abort()
    }
  }, [period])

  return (
    <div>
      {
        loading && <Spinner />
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
    </div>
  )
}

export default DashboardBanner
