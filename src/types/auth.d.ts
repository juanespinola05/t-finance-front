export interface LoginInput {
  email: string
  password: string
}

export interface LoginResponse {
  ok: boolean
  token: string
}
