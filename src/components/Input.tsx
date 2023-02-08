import { ForwardedRef, forwardRef, InputHTMLAttributes, ReactElement, RefAttributes } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import InvalidInputText from './InvalidInputText'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  fieldError?: FieldError
  errorMessage?: string
}

const Input = forwardRef(
  ({ fieldError, errorMessage, className = '', ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
    return (
      <>
        <input
          ref={ref}
          className={`h-12 block px-4 rounded-xl bg-gray-100 shadow-input disabled:text-gray-500 ${className}`}
          {...props}
        />
        {
      (fieldError !== undefined) &&
        <InvalidInputText>
          {errorMessage}
        </InvalidInputText>
      }
      </>
    )
  })

export default Input
