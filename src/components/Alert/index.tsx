import { FC, PropsWithChildren, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

const Alert: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactElement => {
  return createPortal(
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: 400 }}
      className='pl-4 flex gap-2 items-center w-80 h-12 text-gray-100 rounded-xl bg-gray-900 absolute top-2 right-2 z-50'
    >
      {children}
    </motion.div>,
    document.getElementById('root') as Element
  )
}

export default Alert
