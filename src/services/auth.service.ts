import { LoginInput, LoginResponse } from '../types/auth'
import api from './api'

export default class AuthService {
  async login (data: LoginInput): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('auth/login', data)
    localStorage.setItem('token', response.data.token)
    return response.data
  }
}
