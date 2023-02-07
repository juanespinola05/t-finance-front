import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'
import { LimitStateFromApi } from '../../types/limit'

export const getLimit = createAsyncThunk('@limit/get', async (_, thunkAPI) => {
  try {
    const response = await api.get<LimitStateFromApi>('/limit/state', {
      signal: thunkAPI.signal
    })
    return response.data.state
  } catch (error: any) {
    if (error.message !== null) {
      return thunkAPI.rejectWithValue(error?.message)
    }
  }
})
