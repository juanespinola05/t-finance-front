import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'
import { Operation, OperationCreatedFromApi, OperationsFromApi } from '../../types/operation'

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

export const createOperation = createAsyncThunk<any, Omit<Operation, 'id'>>('@operations/create', async (operation, thunkAPI) => {
  try {
    const response = await api.post<OperationCreatedFromApi>('/operations/', operation, {
      signal: thunkAPI.signal
    })
    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message ?? error?.message)
  }
})

export const updateOperation = createAsyncThunk<any, Operation>('@operations/update', async ({ id, ...operation }, thunkAPI) => {
  try {
    const response = await api.patch<OperationCreatedFromApi>(`/operations/${id}`, operation, {
      signal: thunkAPI.signal
    })
    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message ?? error?.message)
  }
})
