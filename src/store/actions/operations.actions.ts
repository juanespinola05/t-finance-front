import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'
import { OperationsFromApi } from '../../types/operation'

export const getAllOperations = createAsyncThunk<any, { month: number }>('@operations/getAll', async ({ month }, thunkAPI) => {
  try {
    const response = await api.get<OperationsFromApi>(`/operations/month/${month}`, {
      signal: thunkAPI.signal
    })
    return response.data.data
  } catch (error: any) {
    if (error.message !== null) {
      return thunkAPI.rejectWithValue(error?.message)
    }
  }
})
