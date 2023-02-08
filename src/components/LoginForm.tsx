/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { LoginInput } from '../types/auth'
import ErrorAlert from './ErrorAlert'
import Form from './Form'
import Input from './Input'
import Spinner from './Spinner'

const LoginForm: FC = (): ReactElement => {
  const { auth: { loading, error }, login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>()

  const onSubmit: SubmitHandler<LoginInput> = data => {
    login(data)
  }

  return (
    <>
      <ErrorAlert error={error} />
      <Form
        className={loading ? 'opacity-30' : ''}
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading && <Spinner />}
        <div>
          <Input
            className='w-80 mx-auto'
            placeholder='example@email.com'
            fieldError={errors.email}
            errorMessage='Valid email is required'
            {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
          />
        </div>
        <div>
          <Input
            className='w-80 mx-auto'
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
