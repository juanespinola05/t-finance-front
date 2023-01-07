
import { MONTH_NAMES } from '../constants/month'
import { setPeriod } from '../store/slices/app.slice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Month, SwitcherParamsVariants, useMonthSwitchInterface } from '../types/month'

const useMonthSwitch = (initialYear: number, initialMonth: Month): useMonthSwitchInterface => {
  const dispatch = useAppDispatch()
  const { period } = useAppSelector((state) => state.app)

  const switcher = (type: SwitcherParamsVariants): void => {
    let { month, year } = period
    let monthNumber = MONTH_NAMES.indexOf(month)
    if (type === 'next') {
      const isNextYear = monthNumber === 11
      monthNumber = isNextYear ? 0 : monthNumber + 1
      year = isNextYear ? year + 1 : year
    } else if (type === 'prev') {
      const isPrevYear = monthNumber === 0
      monthNumber = isPrevYear ? 11 : monthNumber - 1
      year = isPrevYear ? year - 1 : year
    }
    dispatch(setPeriod({ month: MONTH_NAMES[monthNumber], year }))
  }

  return {
    period,
    switcher
  }
}

export default useMonthSwitch
