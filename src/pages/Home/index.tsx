import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage'

const Home = (): ReactElement => {
  return (
    <AnimatedPage>
      <div className='p-4 bg-hero h-full bg-cover bg-[70%_center] shadow-home'>
        <div className='flex mt-8 gap-4 justify-center items-center'>
          <img
            src='/logo.png'
            alt=''
            className='w-24'
          />
          <h1 className='text-white text-3xl font-bold'>
            Join <br /> T-Finance!
          </h1>
        </div>
        <div className='text-center absolute bottom-16'>
          <p className='text-white mb-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, iste eius et deleniti
          </p>
          <Link to='/login' className='button w-48 pt-2.5'>
            Get Started
          </Link>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Home
