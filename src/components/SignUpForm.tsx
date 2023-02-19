/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { SignUpInput } from '../types/auth'
import ErrorAlert from './ErrorAlert'
import Form from './Form'
import Input from './Input'
import Spinner from './Spinner'
import SucessAlert from './SucessAlert'

const SignUpForm: FC = (): ReactElement => {
  const { auth: { loading, error, success }, signUp } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpInput>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignUpInput> = async data => {
    const promise = signUp(data)
    promise
      .then(() => {
        success && setTimeout(() => {
          navigate('/dashboard', { replace: true })
        }, 3000)
      })
      .catch(e => e)
  }

  return (
    <>
      {
        success && (
          <>
            <SucessAlert message='Successfully registered' />
            <Spinner />
          </>
        )
      }
      <ErrorAlert error={error} />
      <Form
        className={loading ? 'opacity-30' : ''}
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading && <Spinner />}
        <div>
          <Input
            className='w-80 mx-auto'
            placeholder='Your name'
            fieldError={errors.name}
            errorMessage='Your name is required'
            {...register('name', { required: true, minLength: 3, maxLength: 32 })}
          />
        </div>
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
        <div>
          <input
            value='Sign up'
            className='button w-80'
            type='submit'
          />
        </div>
      </Form>
    </>
  )
}

export default SignUpForm
