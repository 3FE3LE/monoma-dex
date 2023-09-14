import axios, { AxiosError } from 'axios'

type User = {
  fullName: string
  email: string
  password: string
}

export const SignUpUser = async (user: User) => {
  try {
    const response = await axios.post('/api/auth/sign-up', user)
    console.log(response)
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response
    }
  }
}
