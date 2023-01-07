import { FC, HTMLAttributes, PropsWithChildren } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const Title: FC<PropsWithChildren<TitleProps>> = ({ children, className = '', ...rest }: PropsWithChildren<TitleProps>) => {
  return (
    <h1
      className={`text-3xl font-bold text-gray-700 ${className}`}
      {...rest}
    >
      {children}
    </h1>
  )
}

export default Title
