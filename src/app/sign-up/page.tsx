'use client'
import { useState } from 'react'
import { AxiosResponse } from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SignUpUser } from '../services/auth'
import tw from 'twin.macro'
import { Layout } from '@/components/UI'
import Form, { FormInput, FormLabel } from '@/components/UI/Form'

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
  const [response, setResponse] = useState<AxiosResponse>()
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (isValid) {
      const response = await SignUpUser(data)
      setResponse(response)
      if (response && response.statusText === 'Ok') {
        const res = await signIn('credentials', {
          email: data?.email,
          password: data?.password,
          redirect: false,
        })
        if (res?.error) return setError(res.error)
        if (res?.ok) return router.push('/dashboard')
      }
    }
  }

  return (
    <Layout>
      <Form title='Register' handleSubmit={handleSubmit(onSubmit)}>
          <div tw="mb-4">
            <div tw="text-red-500">{error}</div>
            <div tw="text-red-500">
              {response?.statusText !== 'Ok' && response?.data.message}
            </div>
            <FormLabel htmlFor="fullName">Full Name</FormLabel>
            <FormInput
              type="text"
              id="fullName"
              {...register('fullName', { required: true, maxLength: 20 })}
            />
            <div tw="text-red-500">{errors.fullName?.message}</div>
          </div>
          <div tw="mb-4">
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            <div tw="text-red-500">{errors.email?.message}</div>
          </div>
          <div tw="mb-4">
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              id="password"
              {...register('password', { required: true, minLength: 8 })}
            />
            <div tw="text-red-500">{errors.password?.message}</div>
          </div>
      </Form>
    </Layout>
  )
}
