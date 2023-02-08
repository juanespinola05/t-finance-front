import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import api from '../../services/api'
import AuthService from '../../services/auth.service'
import { LoginInput, LoginResponse, SignUpInput } from '../../types/auth'
import { removeError, reset, setError } from '../slices/auth.slice'

const service = new AuthService()

// todo: take this to utils and use it in every action
const getErrorMessage = (error: unknown): string | unknown => {
  if (error instanceof AxiosError) {
    if (error.message === 'Network Error') {
      return 'Service not available, try again later'
    } else {
      return error.response?.data.message
    }
  }
  return error
}

export const signupUser = createAsyncThunk<any, SignUpInput>('@auth/signup', async (data, thunkAPI) => {
  try {
    const response = await api.post('/auth/register', data, {
      signal: thunkAPI.signal
    })
    setTimeout(() => {
      thunkAPI.dispatch(reset())
    }, 4000)
    return thunkAPI.fulfillWithValue(response.data)
  } catch (error: any) {
    setTimeout(() => {
      thunkAPI.dispatch(removeError())
    }, 5000)
    return thunkAPI.rejectWithValue(error?.response?.data?.message ?? error.message)
  }
})

type LoginActionReturn = Promise<AxiosResponse<LoginResponse> | string | unknown>

export const loginUser = createAsyncThunk('@auth/login', async (args: LoginInput, thunkAPI): LoginActionReturn => {
  try {
    const data = await service.login(args)
    return {
      token: data.token
    }
  } catch (error) {
    const message = getErrorMessage(error)
    if (typeof message === 'string') {
      thunkAPI.dispatch(setError({ message }))
      setTimeout(() => {
        thunkAPI.dispatch(removeError())
      }, 5000)
    } else console.log(error)
    return thunkAPI.rejectWithValue(message)
  }
})
