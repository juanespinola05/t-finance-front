import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import AuthService from '../../services/auth.service'
import { LoginInput, LoginResponse } from '../../types/auth'
import { removeError, setError } from '../slices/auth.slice'

const service = new AuthService()

const getErrorMessage = (error: unknown): string | unknown => {
  if (error instanceof AxiosError) {
    return error.response?.data.message
  }
  return error
}

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
    return getErrorMessage(error)
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
    }
    return thunkAPI.rejectWithValue(message)
  }
})
