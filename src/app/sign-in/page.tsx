'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
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
  email: string
  password: string
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Inputs>()

  const router = useRouter()

  const [error, setError] = useState<string>('')

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (isValid) {
      const waiting = toast.loading('Signing in...')

      const res = await signIn('credentials', {
        email: data?.email,
        password: data?.password,
        redirect: false,
      })

      if (res?.error) {
        setError(res.error)
        return toast.error(`${res?.error}`, { id: waiting })
      }

      toast.success('Successfully Logged!', { id: waiting })

      if (res?.ok) return router.push('/dashboard')
    }
  }

  const handleIconClick = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Layout>
      <Form
        title="Sign in"
        isValid={isValid}
        handleSubmit={handleSubmit(onSubmit)}
      >
        <div tw="mb-4">
          <FormError>{error}</FormError>
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
