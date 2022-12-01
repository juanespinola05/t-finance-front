import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/auth.actions'

interface User {
  id: number
  token: string
}

export interface AuthState {
  loading: boolean
  userInfo: User | null
  error: unknown
  success: boolean
}

const INITIAL_STATE: AuthState = {
  userInfo: {
    id: 123,
    token: 'asdadad'
  },
  loading: true,
  error: null,
  success: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  }
})

export default authSlice.reducer
