import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'
import { MONTH_NAMES } from '../../constants/month'
import { SwitcherFunctionReturn } from '../../types/month'

export const getBalances = createAsyncThunk<any, SwitcherFunctionReturn>('@balance/general/get', async ({ year, month }, thunkAPI) => {
  const monthIndex = MONTH_NAMES.findIndex(m => m === month)
  try {
    const response = await api.get(`/operations/balance/${year}/${monthIndex + 1}`, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    if (error.message !== null) {
      return thunkAPI.rejectWithValue(error?.message)
    }
  }
})
