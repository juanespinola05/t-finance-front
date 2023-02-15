export interface LoginInput {
  email: string
  password: string
}

export interface LoginResponse {
  ok: boolean
  token: string
}

export interface SignUpInput {
  name: string
  email: string
  password: string
}

export interface SignUpResponse {
  ok: boolean
  token: string
}
