import { AuthState, setToken } from '../store/slices/auth.slice'
import { useAppDispatch, useAppSelector } from '../store/store'

interface useAuthInterface {
  auth: AuthState
  getToken: Function
}

const useAuth = (): useAuthInterface => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)

  const getToken = (): void => {
    const token = localStorage.getItem('token')
    dispatch(setToken({ token }))
  }

  return {
    auth,
    getToken
  }
}

export default useAuth
