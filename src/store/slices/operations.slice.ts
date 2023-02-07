import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Operation, OperationCreatedFromApi, OperationsState } from '../../types/operation'
import { createOperation, getAllOperations, updateOperation } from '../actions/operations.actions'

const initialState: OperationsState = {
  operations: [],
  loading: false,
  error: null,
  success: false
}

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.success = true
      return state
    },
    removeSucess: (state) => {
      state.success = false
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOperations.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getAllOperations.fulfilled, (state, action: PayloadAction<Operation[]>) => {
      state.loading = false
      state.operations = action.payload
    })
    builder.addCase(getAllOperations.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(createOperation.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(createOperation.fulfilled, (state, action: PayloadAction<OperationCreatedFromApi>) => {
      state.loading = false
    })
    builder.addCase(createOperation.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(updateOperation.pending, (state) => {
      state.loading = true
      state.error = null
      state.loading = false
    })
    builder.addCase(updateOperation.fulfilled, (state, action: PayloadAction<Partial<Operation>>) => {
      const operationIndex = state.operations.findIndex(o => o.id === action.payload.id)
      state.operations[operationIndex] = { ...state.operations[operationIndex], ...action.payload }
      state.loading = false
    })
    builder.addCase(updateOperation.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.loading = false
    })
  }
})

export default operationsSlice.reducer
export const { removeSucess, setSuccess } = operationsSlice.actions
