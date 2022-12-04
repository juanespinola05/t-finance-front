import { FC, HTMLAttributes, PropsWithChildren } from 'react'

export const enum TextSizes {
  tiny = 'xs',
  small = 'sm',
  base = 'base',
  large = 'lg',
}

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  size: TextSizes
}

const Text: FC<PropsWithChildren<TextProps>> = ({ children, size, className = '', ...rest }: PropsWithChildren<TextProps>) => {
  return (
    <p
      className={`text-${size} px-4 ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}

export default Text
