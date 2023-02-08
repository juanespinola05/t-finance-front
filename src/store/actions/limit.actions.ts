import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'
import { Limit, LimitFromApi, LimitStateFromApi } from '../../types/limit'

export const getLimitState = createAsyncThunk('@limit/getState', async (_, thunkAPI) => {
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

export const getLimit = createAsyncThunk('@limit/getLimit', async (_, thunkAPI) => {
  try {
    const response = await api.get<LimitFromApi>('/limit/', {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    if (error.message !== null) {
      return thunkAPI.rejectWithValue(error?.message)
    }
  }
})

export const createLimit = createAsyncThunk<any, Pick<Limit, 'amount'>>('@limit/updateLimit', async (data, thunkAPI) => {
  try {
    await api.post('/limit/', data, {
      signal: thunkAPI.signal
    })
    return thunkAPI.fulfillWithValue(data.amount)
  } catch (error: any) {
    if (error.message !== null) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message ?? error?.message)
    }
  }
})
