import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import logo from '../../../public/logo.png'

const Loading = (): ReactElement => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='bg-slate-100 h-[calc(100%-4rem)] z-50 w-full absolute grid place-content-center'
    >
      <img
        src={logo}
        alt='T-Finance Logo'
        className='w-32 animate-pulse'
      />
    </motion.div>
  )
}

export default Loading
