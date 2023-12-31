import axios, { AxiosError } from 'axios'

type User = {
  fullName: string
  email: string
  password: string
}

export const signUpUser = async (user: User) => {
  try {
    const response = await axios.post('/api/auth/sign-up', user)
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response
    }
  }
}
