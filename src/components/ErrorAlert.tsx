import { FC, PropsWithChildren, ReactElement } from 'react'
import { AnimatePresence } from 'framer-motion'
import Alert from './Alert'
import { BiErrorCircle } from 'react-icons/bi'

interface ErrorAlertProps {
  error: any
}

const ErrorAlert: FC<PropsWithChildren<ErrorAlertProps>> = ({ children, error }: PropsWithChildren<ErrorAlertProps>): ReactElement => {
  return (
    <AnimatePresence>
      {
        error !== null &&
          <Alert>
            <BiErrorCircle className='text-red-700 text-xl' />
            {error}
          </Alert>
      }
    </AnimatePresence>
  )
}

export default ErrorAlert
