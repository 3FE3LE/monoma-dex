import React, { FormEventHandler } from 'react'
import { UseFormRegister } from 'react-hook-form'
import tw from 'twin.macro'

type FormProps = {
  title: string
  children: React.ReactNode
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export const FormLabel = tw.label`
block
mb-2
font-bold
text-gray-700
`

export const FormInput = tw.input`
w-full
px-3
py-2
border
rounded-md
focus:outline-none
focus:ring
focus:border-blue-500
`
const FormWrapper = tw.div`
max-w-sm
mx-auto
p-6
bg-white
shadow-md
rounded-3xl
w-full
`

const FormButton = tw.button`
mt-4
px-4
py-2
bg-blue-600
text-white
rounded-md
hover:bg-blue-600
focus:outline-none
focus:ring
focus:bg-blue-600
`
export default function Form({ title, handleSubmit, children }: FormProps) {
  return (
    <FormWrapper>
      <h2 tw="text-xl font-bold mb-4">{title}</h2>
      <form onSubmit={handleSubmit}>
        {children}
        <FormButton type="submit">{title}</FormButton>
      </form>
    </FormWrapper>
  )
}
