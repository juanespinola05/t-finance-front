import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getBalances = createAsyncThunk('@balance/general/get', async (data, thunkAPI) => {
  // TODO: use data parameter to make this action call /general or more specific dates with query parameters
  try {
    const response = await api.get('/operations/balance/general', {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    if (error.message !== null) {
      return thunkAPI.rejectWithValue(error?.message)
    }
  }
})
