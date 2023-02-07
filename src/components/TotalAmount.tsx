import { ReactElement, FC } from 'react'
import OperationTypeIcon from './OperationTypeIcon'

interface TotalAmountProps {
  type: 'income' | 'outflow'
  amount: number | string
}

const TotalAmount: FC<TotalAmountProps> = ({ type, amount = 0 }: TotalAmountProps): ReactElement => {
  return (
    <div className='flex gap-2 items-center'>
      <OperationTypeIcon type={type} />
      <div>
        <p>{type === 'income' ? 'Net income' : 'Expenditure'}</p>
        <p className='text-gray-500'>$ {amount}</p>
      </div>
    </div>
  )
}

export default TotalAmount
