import { FC, ReactElement, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { getBalances } from '../../store/actions/balance.actions'
import { useAppDispatch } from '../../store/store'
import Text, { TextSizes } from '../Text'
import { MdOutlineNavigateNext } from 'react-icons/md'
import useMonthSwitch from '../../hooks/useMonthSwitch'

const MonthSwitcher: FC = (): ReactElement => {
  const dispatch = useAppDispatch()
  const { auth } = useAuth()
  const { period, switcher } = useMonthSwitch(2022, 'Dec')

  useEffect(() => {
    const promise = dispatch(getBalances())

    return () => {
      promise.abort()
    }
  }, [period])

  const { month, year } = period

  if (auth.userInfo === null) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className='flex gap-2 items-center justify-center'>
      <button onClick={() => switcher('prev')}>
        <MdOutlineNavigateNext className='text-4xl text-white rotate-180' />
      </button>
      <Text size={TextSizes.large} className='h-min w-32'>{month}, {year}</Text>
      <button onClick={() => switcher('next')}>
        <MdOutlineNavigateNext className='text-4xl text-white' />
      </button>
    </div>
  )
}

export default MonthSwitcher
