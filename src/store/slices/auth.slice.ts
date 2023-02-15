import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignUpResponse } from '../../types/auth'
import { loginUser, signupUser } from '../actions/auth.actions'

interface User {
  token: string
}

export interface AuthState {
  loading: boolean
  userInfo: User | null
  error: any
  success: boolean
}

const token = localStorage.getItem('token')

const INITIAL_STATE: AuthState = {
  userInfo: token !== null ? { token } : null,
  loading: false,
  error: null,
  success: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string | null }>) => {
      const { payload: { token } } = action
      state.loading = false
      if (typeof token === 'string') {
        state.userInfo = {
          token: action.payload.token as string
        }
      } else {
        state.userInfo = null
      }
      return state
    },
    setError: (state, action: PayloadAction<{ message: string }>) => {
      state.error = action.payload.message
      return state
    },
    removeError: (state) => {
      return {
        ...state,
        error: INITIAL_STATE.error
      }
    },
    logout: () => {
      return {
        ...INITIAL_STATE,
        userInfo: null
      }
    },
    reset: () => {
      return {
        ...INITIAL_STATE,
        success: false,
        loading: false,
        error: null
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(signupUser.fulfilled, (state, action: PayloadAction<SignUpResponse['token']>) => {
      state.loading = false
      state.userInfo = {
        token: action.payload
      }
      state.success = true
    })
    builder.addCase(signupUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.userInfo = action.payload as User
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  }
})

export default authSlice.reducer
export const { setToken, setError, removeError, logout, reset } = authSlice.actions
