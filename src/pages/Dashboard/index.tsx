import { ReactElement } from 'react'

const Dashboard = (): ReactElement => {
  return (
    <div className='font-roboto h-[18em] bg-blue text-center text-white grid place-content-center'>
      <div className='flex flex-col'>
        <p className='text-lg font-light'>Balance</p>
        <p className='text-5xl font-bold mb-6'>$3,050</p>
        <p className='font-light'> &lt; May 2022 &gt; </p>
      </div>
    </div>
  )
}

export default Dashboard
