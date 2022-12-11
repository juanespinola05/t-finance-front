export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

export type SwitcherParamsVariants = 'next' | 'prev'

export type SwitcherFunction = (type: SwitcherParamsVariants) => void

export interface SwitcherFunctionReturn {
  year: number
  month: Month
}

export interface useMonthSwitchInterface {
  period: SwitcherFunctionReturn
  switcher: SwitcherFunction
}
