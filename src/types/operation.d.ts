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
  success: boolean
}

export interface OperationsFromApi {
  length: number
  data: Operation[]
}

export interface OperationCreatedFromApi extends Operation {
  ok: boolean
  userId: number
  categoryId: number
  deletedAt: Date
  updatedAt: Date
}
