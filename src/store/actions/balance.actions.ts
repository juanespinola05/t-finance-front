import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getBalances = createAsyncThunk('person/save', async (data, { rejectWithValue }) => {
  try {
    const response = await api.get('/operations/balance/general')
    return response.data
  } catch (error: any) {
    if (error.message !== null) {
      return rejectWithValue(error?.message)
    }
  }
})
