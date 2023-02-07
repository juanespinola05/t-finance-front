import { FC, ReactElement } from 'react'
import { VscTriangleUp } from 'react-icons/vsc'
import { OperationType } from '../types/operation'

const variants = {
  income: 'bg-green-200 text-green-400 rotate-180',
  outflow: 'bg-red-200 text-red-400'
}

interface IProps {
  type: OperationType
  size?: '3xl' | '4xl' | '5xl'
}

const OperationTypeIcon: FC<IProps> = ({ type, size = '4xl' }): ReactElement => {
  const selected = variants[type]
  return (
    <VscTriangleUp className={`text-${size} rounded-xl ${selected}`} />
  )
}

export default OperationTypeIcon
