import type { HeadingType } from '#/types'
import { createElement } from 'react'

const Heading: HeadingType = ({ children, className, level = 'h2' }) => {
  const HeadingComponent = ({
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) =>
    createElement(level, props, children)

  return <HeadingComponent className={className}>{children}</HeadingComponent>
}

Heading.displayName = 'Heading'

export default Heading
