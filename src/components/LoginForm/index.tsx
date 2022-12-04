import { FC, ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Form from '../Form'
import Input from '../Input'

interface LoginInputs {
  email: string
  password: string
}

const LoginForm: FC = (): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = data => {
    console.log(data)
  }

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            placeholder='example@email.com'
            fieldError={errors.email}
            errorMessage='Valid email is required'
            {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
          />
        </div>
        <div>
          <Input
            placeholder='•••••••••••'
            type='password'
            fieldError={errors.password}
            errorMessage='Password is required'
            {...register('password', { required: true })}
          />
        </div>
        <Link
          to='/home'
          className='text-sm pr-4 w-max self-end font-medium'
        >
          Forgot Password?
        </Link>
        <div>
          <input
            value='Sign in'
            className='button w-80'
            type='submit'
          />
        </div>
      </Form>
    </>
  )
}

export default LoginForm
