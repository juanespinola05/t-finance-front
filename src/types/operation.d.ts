type OperationType = 'income' | 'outflow'

export interface Operation {
  id: number
  concept: string
  type: OperationType
  amount: number
  date: Date
  category: string
}

export interface OperationsState {
  operations: Operation[]
  loading: boolean
  error: AxiosError | null | unknown | Error
}

export interface OperationsFromApi {
  length: number
  data: Operation[]
}
