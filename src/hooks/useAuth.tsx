import { loginUser } from '../store/actions/auth.actions'
import { AuthState, setToken } from '../store/slices/auth.slice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { LoginInput } from '../types/auth'

interface useAuthInterface {
  auth: AuthState
  getToken: Function
  login: Function
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

  return {
    auth,
    getToken,
    login
  }
}

export default useAuth
