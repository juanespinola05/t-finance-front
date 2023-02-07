import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Operation, OperationsState } from '../../types/operation'
import { getAllOperations } from '../actions/operations.actions'

const initialState: OperationsState = {
  operations: [],
  loading: true,
  error: null
}

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {},
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
  }
})

export default operationsSlice.reducer
