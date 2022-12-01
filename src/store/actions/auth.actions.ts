import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk('@auth/register', async (args, { rejectWithValue }) => {
  try {
    // make request to backend
    await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    })
  } catch (error: any) {
    // return custom error message from API if any
    if (error.response?.data.message !== null) {
      return rejectWithValue(error.response.data.message)
    } else {
      return rejectWithValue(error.message)
    }
  }
})
