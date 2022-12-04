import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getBalances } from '../actions/balance.actions'

interface BalanceState {
  loading: boolean
  error: Error | null | string
  balance: number
  totalIncome: number
  totalOutflow: number
  month: string
}

interface GeneralBalanceApiReponse extends Pick<BalanceState, 'balance' | 'totalIncome' | 'totalOutflow'> {}

const initialState: BalanceState = {
  loading: true,
  error: null,
  balance: 0,
  totalIncome: 0,
  totalOutflow: 0,
  month: 'may'
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {},
  extraReducers: {
    [getBalances.pending.toString()]: (state) => {
      state.loading = true
      state.error = null
    },
    [getBalances.fulfilled.toString()]: (state, action: PayloadAction<GeneralBalanceApiReponse>) => {
      const { balance, totalIncome, totalOutflow } = action.payload
      state = {
        ...state,
        totalIncome,
        totalOutflow,
        balance
      }
    },
    [getBalances.rejected.toString()]: (state, action: PayloadAction<{ name: string, message: string }>) => {
      state.loading = false
      state.error = action.payload
      console.log('errorrrr')
    }
  }
})

export default balanceSlice.reducer
