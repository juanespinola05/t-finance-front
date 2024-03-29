import { FC, ReactElement } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import LoggedInLayout from '../../components/LoggedInLayout'

const Statistics: FC = (): ReactElement => {
  return (
    <AnimatedPage>
      <LoggedInLayout>
        <div className='bg-white'>
          <div className='font-roboto h-[18em] bg-yellow-300 text-center text-black grid place-content-center'>
            <div className='flex flex-col'>
              <img
                className='rounded-full p-1 border-2 border-white border-solid'
                src='https://api.dicebear.com/5.x/thumbs/svg'
                alt='Random Avatar Image'
              />
              <p className='text-xl font-bold'>Juan Sebas</p>
              <p className='text-md text-gray-900'>sebar5er@gmail.com</p>
              <a href='/logout' className='underline'>Log out</a>
            </div>
          </div>
          <div className='p-4'>
            <h3 className='text-lg'>Profile information</h3>
            <div>
              <h4>Limit</h4>
            </div>
          </div>
        </div>
      </LoggedInLayout>
    </AnimatedPage>
  )
}

export default Statistics
