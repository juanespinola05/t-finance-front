import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MONTH_NAMES } from '../../constants/month'
import { AppState } from '../../types/app'
import { SwitcherFunctionReturn } from '../../types/month'

const initialState: AppState = {
  period: {
    year: new Date().getFullYear(),
    month: MONTH_NAMES[new Date().getMonth()]
  }
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<SwitcherFunctionReturn>) => {
      state.period = action.payload
      return state
    }
  },
  extraReducers: () => {}
})

export default appSlice.reducer
export const { setPeriod } = appSlice.actions
