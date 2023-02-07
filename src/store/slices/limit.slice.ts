import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Limit, LimitState } from '../../types/limit'
import { getLimit } from '../actions/limit.actions'

const initialState: LimitState = {
  amount: 0,
  outflowBalance: 0,
  loading: true,
  error: null
}

const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    updateLimit: (state, action: PayloadAction<LimitState>) => {
      state = { ...action.payload }
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLimit.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getLimit.fulfilled, (state, action: PayloadAction<Limit | undefined>) => {
      const { amount, outflowBalance } = action.payload as Limit
      state.amount = amount
      state.outflowBalance = outflowBalance
    })
    builder.addCase(getLimit.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default limitSlice.reducer
export const { updateLimit } = limitSlice.actions
