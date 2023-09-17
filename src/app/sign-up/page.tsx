'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { signUpUser } from '../../services/auth'
import tw from 'twin.macro'
import { Eye, EyeOff } from '@/components/Icons'
import { Layout } from '@/components/UI'
import Form, {
  FormError,
  FormIcon,
  FormInput,
  FormLabel,
} from '@/components/UI/Form'

type Inputs = {
  fullName: string
  email: string
  password: string
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Inputs>()
  const [error, setError] = useState<string>()
  const [showPassword, setShowPassword] = useState(false)
  const [response, setResponse] = useState<AxiosResponse>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (isValid) {
      const waiting = toast.loading('Signing up...')

      await signUpUser(data).then(async response => {
        setResponse(response)
        console.log(response)
        const res = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false,
        })
        if (response?.status === 400) {
          return toast.error(`${response.data.message}`, { id: waiting })
        }
        if (res?.error) return setError(res.error)

        toast.success('Successfully Signed up!', { id: waiting })

        return router.push('/dashboard')
      })
    }
  }

  const handleIconClick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Layout>
      <Form title="Sign Up" handleSubmit={handleSubmit(onSubmit)}>
        <div tw="mb-4">
          <FormError>{error}</FormError>
          <FormError>
            {response?.statusText !== 'OK' && response?.data.message}
          </FormError>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <FormInput
            type="text"
            id="fullName"
            {...register('fullName', {
              required: { value: true, message: 'Full name is required' },
              maxLength: { value: 50, message: 'Max 50 characters' },
              minLength: { value: 3, message: 'Min 3 characters' },
            })}
          />
          <FormError>{errors.fullName?.message}</FormError>
        </div>
        <div tw="mb-4">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            {...register('email', {
              required: { value: true, message: 'Email is required' },
            })}
          />
          <FormError>{errors.email?.message}</FormError>
        </div>
        <div tw="mb-4 relative">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: { value: 8, message: 'Min 8 characters' },
            })}
          />
          <FormIcon onClick={handleIconClick}>
            {showPassword ? <Eye /> : <EyeOff />}
          </FormIcon>
          <FormError>{errors.password?.message}</FormError>
        </div>
      </Form>
    </Layout>
  )
}
