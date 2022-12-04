import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }

    return config
  },
  async (error) => await Promise.reject(error)
)

export default api
