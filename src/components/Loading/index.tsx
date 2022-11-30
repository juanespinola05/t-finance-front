import { ReactElement } from 'react'
import logo from '../../../public/logo.png'

const Loading = (): ReactElement => {
  return (
    <div className='bg-slate-100 h-full w-full absolute grid place-content-center'>
      <img
        src={logo}
        alt='T-Finance Logo'
        className='w-32 animate-pulse'
      />
    </div>
  )
}

export default Loading
