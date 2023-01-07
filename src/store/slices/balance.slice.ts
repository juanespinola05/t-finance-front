import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BalanceState, GeneralBalanceResponse } from '../../types/balance'
import { getBalances } from '../actions/balance.actions'

const initialState: BalanceState = {
  loading: true,
  error: null,
  balance: 0,
  totalIncome: 0,
  totalOutflow: 0
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBalances.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getBalances.fulfilled, (state, action: PayloadAction<GeneralBalanceResponse>) => {
      const { balance, income, outflow } = action.payload
      state.loading = false
      state.balance = balance
      state.totalIncome = income
      state.totalOutflow = outflow
    })
    builder.addCase(getBalances.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default balanceSlice.reducer
