'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { signUpUser } from '../../services/auth'
import 'twin.macro'
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

      const response = await signUpUser(data)

      setResponse(response)

      if (response && response.statusText === 'OK') {
        const res = await signIn('credentials', {
          email: data?.email,
          password: data?.password,
          redirect: false,
        })
        if (res?.error) return setError(res.error)

        toast.success('Successfully Signed up!', { id: waiting })

        if (res?.ok) return router.push('/dashboard')
      }

      toast.error(`${response?.data.message}`, { id: waiting })
    }
  }

  const handleIconClick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Layout>
      <Form
        title="Sign Up"
        isValid={isValid}
        handleSubmit={handleSubmit(onSubmit)}
      >
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
              maxLength: { value: 20, message: 'Max 20 characters' },
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
              required: { value: true, message: 'password is required' },
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
