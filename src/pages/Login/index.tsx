import { ReactElement } from 'react'
import { Link, Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import AnimatedPage from '../../components/AnimatedPage'
import Title from '../../components/Title'
import Text, { TextSizes } from '../../components/Text'
import LoginForm from '../../components/LoginForm'

const Login = (): ReactElement => {
  const { auth: { userInfo } } = useAuth()
  if (userInfo !== null) return <Navigate to='/dashboard' />

  return (
    <AnimatedPage>
      <div className='p-4 text-center h-full'>
        <div className='grid place-content-center h-full'>
          <div>
            <Title className='my-3'>
              Welcome back
            </Title>
            <Text size={TextSizes.tiny} className='mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt pariatur nobis, at minus reprehenderit
            </Text>
          </div>
          <div>
            <LoginForm />
            <div className='flex items-center justify-center gap-1 mt-10'>
              <span className='block w-20 bg-gradient-to-l from-blue to-blue-500 h-1' />
              <Link to='/register'>
                Or Sign Up
              </Link>
              <span className='block w-20 bg-gradient-to-r from-blue to-blue-500 h-1' />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Login
