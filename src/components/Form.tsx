import { FC, HTMLAttributes, PropsWithChildren, ReactElement } from 'react'

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

const Form: FC<PropsWithChildren<FormProps>> = ({ children, className = '', ...props }: PropsWithChildren<FormProps>): ReactElement => {
  return (
    <form
      className={`relative flex flex-col gap-4 ${className}`}
      {...props}
    >
      {children}
    </form>
  )
}

export default Form
