import { FC, PropsWithChildren, ReactElement } from 'react'
import { motion } from 'framer-motion'

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const AnimatedPage: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <motion.div variants={animations} animate='animate' initial='initial' exit='exit'>
      {children}
    </motion.div>
  )
}

export default AnimatedPage
