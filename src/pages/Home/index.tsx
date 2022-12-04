import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Home = (): ReactElement => {
  return (
    <div className='p-4 bg-hero h-full bg-cover row-span-2 bg-[70%_center] shadow-home'>
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
        <div className='bg-[#466aeaa1] inline-block rounded-xl'>
          <Link to='/login' className='block backdrop-blur-md p-[0.8rem_2.6rem] rounded-xl text-white font-bold'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
