import { AxiosError } from 'axios'

export interface GeneralBalanceResponse {
  balance: number
  income: number
  outflow: number
}

export interface BalanceState {
  loading: boolean
  error: AxiosError | null | unknown | Error
  balance: number
  totalIncome: number
  totalOutflow: number
  month: string
}
