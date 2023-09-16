import { FormEventHandler } from 'react'
import tw from 'twin.macro'

export const FormLabel = tw.label`
  block
  mb-2
  font-bold
  text-green-700
`
export const FormInput = tw.input`
  w-full
  px-3
  py-2
  border
  rounded-md
  transition-all
  text-green-900
  focus:(outline-none ring-green-500 border-green-500 scale-105)
  invalid:(ring-red-500 border-red-500)
`
export const FormError = tw.div`
  text-red-500
  transition-all
`
export const FormIcon = tw.span`
  p-2
  rounded-md
  absolute
  right-0
  bottom-0
  transition-all
  hover:(scale-105 bg-green-100)
`
const FormTitle = tw.h1`
  text-green-600
  text-3xl
  font-bold
  mb-4
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
  bg-green-600
  text-white
  rounded-md
  transition-all
  hover:(bg-green-600 scale-105)
  focus:(outline-none ring bg-green-600)
  disabled:(bg-green-100 text-green-500 hover:(bg-green-200 text-green-700))
`

type FormProps = {
  title: string
  children: React.ReactNode
  handleSubmit: FormEventHandler<HTMLFormElement>
}
export default function Form({ title, handleSubmit, children }: FormProps) {
  return (
    <FormWrapper>
      <FormTitle>{title}</FormTitle>
      <form onSubmit={handleSubmit}>
        {children}
        <FormButton>{title}</FormButton>
      </form>
    </FormWrapper>
  )
}
