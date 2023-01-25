import { FC, ReactElement } from 'react'
import Text, { TextSizes } from './Text'
import { MdOutlineNavigateNext } from 'react-icons/md'
import useMonthSwitch from '../hooks/useMonthSwitch'

const MonthSwitcher: FC = (): ReactElement => {
  const { period, switcher } = useMonthSwitch(2022, 'Dec')

  const { month, year } = period
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
