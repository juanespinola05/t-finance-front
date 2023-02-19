import { PayloadAction } from '@reduxjs/toolkit'
import { loginUser, signupUser } from '../store/actions/auth.actions'
import { AuthState, logout, setToken } from '../store/slices/auth.slice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { LoginInput, SignUpInput } from '../types/auth'

interface useAuthInterface {
  auth: AuthState
  getToken: Function
  login: Function
  logOut: Function
  signUp: (data: SignUpInput) => Promise<PayloadAction<any>>
}

const useAuth = (): useAuthInterface => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)

  const login = (loginData: LoginInput): void => {
    void dispatch(loginUser(loginData))
  }

  const getToken = (): void => {
    const token = localStorage.getItem('token')
    dispatch(setToken({ token }))
  }

  const logOut = async (): Promise<void> => {
    localStorage.removeItem('token')
    dispatch(logout())
  }

  const signUp: useAuthInterface['signUp'] = async (data) => {
    const promise = await dispatch(signupUser(data))
    return promise
  }

  return {
    auth,
    getToken,
    login,
    logOut,
    signUp
  }
}

export default useAuth
