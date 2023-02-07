export interface Limit {
  amount: number
  outflowBalance: number
}

export interface LimitState extends Limit {
  loading: boolean
  error: AxiosError | null | unknown | Error
}

export interface LimitStateFromApi {
  ok: boolean
  state: Limit
}
