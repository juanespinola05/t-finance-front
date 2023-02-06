import { ReactElement, FC } from 'react'
import { VscTriangleUp } from 'react-icons/vsc'

interface TotalAmountProps {
  type: 'income' | 'outflow'
  amount: number | string
}

const TotalAmount: FC<TotalAmountProps> = ({ type, amount = 0 }: TotalAmountProps): ReactElement => {
  const types = {
    income: { text: 'Net income', className: 'bg-green-200 text-green-400' },
    outflow: { text: 'Expenditure', className: 'bg-red-200 text-red-400' }
  }
  const selected = types[type]
  return (
    <div className='flex gap-2 items-center'>
      <VscTriangleUp className={`text-4xl rounded-xl ${selected.className}`} />
      <div>
        <p>{selected.text}</p>
        <p className='text-gray-500'>$ {amount}</p>
      </div>
    </div>
  )
}

export default TotalAmount
