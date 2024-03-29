import { FC, ReactElement, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom'
import { getLimitState } from '../store/actions/limit.actions'
import { useAppDispatch, useAppSelector } from '../store/store'
import { formatCurrency } from '../utils/intl'

const LimitDashboard: FC = (): ReactElement => {
  const { amount, outflowBalance } = useAppSelector(state => state.limit)
  const dispatch = useAppDispatch()
  const percentage = (outflowBalance * -1) * 100 / amount
  const greenColorPercentage = Math.ceil((100 - percentage) * 2.55)
  const pathColor = `rgb(255, ${greenColorPercentage}, 35)`

  useEffect(() => {
    const action = dispatch(getLimitState())

    return () => {
      action.abort()
    }
  }, [])

  return (
    <section className='rounded-2xl w-[90%] m-auto bg-white h-40 flex'>
      <div className='basis-[55%] flex flex-col justify-center pl-4 py-4'>
        <h3 className='text-gray-600 font-medium text-lg'>Monthly spending limit</h3>
        <p className='text-xs text-gray-500'>
          {`Spend: $${formatCurrency(outflowBalance * -1)} / $${formatCurrency(amount)}`}
        </p>
        <Link to='/settings' className='text-sm mt-2 underline text-blue'>
          {amount === 0 ? 'Set a ' : 'Update your '}spending limit
        </Link>
      </div>
      <div className='basis-[45%] grid place-items-center p-2'>
        <CircularProgressbar
          strokeWidth={18}
          text={percentage >= 80 ? '!' : ''}
          styles={buildStyles({
            pathColor,
            trailColor: '#eee',
            textColor: '#d10f0f',
            textSize: 24
          })}
          value={percentage}
        />
      </div>
    </section>
  )
}

export default LimitDashboard
