import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Limit, LimitFromApi, LimitState } from '../../types/limit'
import { getLimitState, getLimit, createLimit } from '../actions/limit.actions'

const initialState: LimitState = {
  amount: 0,
  outflowBalance: 0,
  loading: true,
  error: null
}

const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLimitState.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getLimitState.fulfilled, (state, action: PayloadAction<Limit | undefined>) => {
      const { amount, outflowBalance } = action.payload as Limit
      state.amount = amount
      state.outflowBalance = outflowBalance
    })
    builder.addCase(getLimitState.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(getLimit.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getLimit.fulfilled, (state, action: PayloadAction<LimitFromApi | undefined>) => {
      // todo: error a.p is null
      state.amount = action.payload?.amount ?? 0
    })
    builder.addCase(getLimit.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(createLimit.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(createLimit.fulfilled, (state, action: PayloadAction<Limit['amount'] | undefined>) => {
      state.amount = action.payload as Limit['amount'] ?? 0
    })
    builder.addCase(createLimit.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default limitSlice.reducer
