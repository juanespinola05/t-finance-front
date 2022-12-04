import { ReactElement, useEffect } from 'react'
import { getBalances } from '../../store/actions/balance.actions'
import { useAppDispatch, useAppSelector } from '../../store/store'

const Dashboard = (): ReactElement => {
  const { balance, totalIncome, totalOutflow } = useAppSelector(state => state.balance)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log({ totalIncome, totalOutflow })
    void dispatch(getBalances())
  }, [])

  return (
    <div className='font-roboto h-[18em] bg-blue text-center text-white grid place-content-center'>
      <div className='flex flex-col'>
        <p className='text-lg font-light'>Balance</p>
        <p className='text-5xl font-bold mb-6'>${balance}</p>
        <p className='font-light'> &lt; May 2022 &gt; </p>
      </div>
    </div>
  )
}

export default Dashboard
