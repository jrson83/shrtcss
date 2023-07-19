import { createElement } from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type HeadingType = React.FC<React.PropsWithChildren & HeadingProps>

const Heading: HeadingType = ({ children, className, level = 'h2' }) => {
  const HeadingComponent = ({
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) =>
    createElement(level, props, children)

  return <HeadingComponent className={className}>{children}</HeadingComponent>
}

Heading.displayName = 'Heading'

export default Heading
