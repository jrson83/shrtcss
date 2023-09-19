import { type HTMLAttributes, createElement } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export default function Heading({
  children,
  className,
  as = 'h2',
  ...rest
}: HeadingProps) {
  const HeadingComponent = ({ ...props }) => createElement(as, props, children)

  return (
    <HeadingComponent className={className} as={as} {...rest}>
      {children}
    </HeadingComponent>
  )
}
