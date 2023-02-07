import { FC, PropsWithChildren, ReactElement } from 'react'
import { AnimatePresence } from 'framer-motion'
import Alert from './Alert'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface ErrorAlertProps {
  message: string
}

const SucessAlert: FC<PropsWithChildren<ErrorAlertProps>> = ({ children, message }: PropsWithChildren<ErrorAlertProps>): ReactElement => {
  return (
    <AnimatePresence>
      <Alert>
        <BsFillCheckCircleFill className='text-green-500 text-xl' />
        {message}
      </Alert>
    </AnimatePresence>
  )
}

export default SucessAlert
