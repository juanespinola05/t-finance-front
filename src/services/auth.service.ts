import { LoginInput, LoginResponse, SignUpInput, SignUpResponse } from '../types/auth'
import api from './api'

export default class AuthService {
  async login (data: LoginInput): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('auth/login', data)
    localStorage.setItem('token', response.data.token)
    return response.data
  }

  async signup (data: SignUpInput): Promise<SignUpResponse> {
    const response = await api.post<SignUpResponse>('/auth/register', data)
    localStorage.setItem('token', response.data.token)
    return response.data
  }
}
