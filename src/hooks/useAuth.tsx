import { AuthState } from '../store/slices/auth.slice'
import { useAppSelector } from '../store/store'

interface useAuthInterface {
  auth: AuthState
}

const useAuth = (): useAuthInterface => {
  const auth = useAppSelector((state) => state.auth)

  return {
    auth
  }
}

export default useAuth
