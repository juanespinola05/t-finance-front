import { useState } from 'react'
import { Month, SwitcherParamsVariants, useMonthSwitchInterface } from '../types/month'

const monthNames: Month[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const useMonthSwitch = (initialYear: number, initialMonth: Month): useMonthSwitchInterface => {
  const [period, setPeriod] = useState({ month: initialMonth, year: initialYear })

  const switcher = (type: SwitcherParamsVariants): void => {
    let { month, year } = period
    let monthNumber = monthNames.indexOf(month)
    if (type === 'next') {
      const isNextYear = monthNumber === 11
      monthNumber = isNextYear ? 0 : monthNumber + 1
      year = isNextYear ? year + 1 : year
    } else if (type === 'prev') {
      const isPrevYear = monthNumber === 0
      monthNumber = isPrevYear ? 11 : monthNumber - 1
      year = isPrevYear ? year - 1 : year
    }
    setPeriod({ month: monthNames[monthNumber], year })
  }

  return {
    period,
    switcher
  }
}

export default useMonthSwitch
