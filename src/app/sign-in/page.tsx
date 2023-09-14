'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import 'twin.macro'
import { Layout } from '@/components/UI'
import Form, { FormInput, FormLabel } from '@/components/UI/Form'

type Inputs = {
  email: string
  password: string
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const router = useRouter()

  const [error, setError] = useState<string>('')

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const res = await signIn('credentials', {
      email: data?.email,
      password: data?.password,
      redirect: false,
    })

    if (res?.error) return setError(res.error)
    if (res?.ok) return router.push('/dashboard')
  }

  return (
    <Layout>
      <Form title="Login" handleSubmit={handleSubmit(onSubmit)}>
        <div tw="mb-4">
          <div tw="text-red-500">{error}</div>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" {...register('email')} />
          <div tw="text-red-500">{errors.email?.message}</div>
        </div>
        <div tw="mb-4">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" id="password" {...register('password')} />
          <div tw="text-red-500">{errors.password?.message}</div>
        </div>
      </Form>
    </Layout>
  )
}
