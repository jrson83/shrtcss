import { createElement } from 'preact'

interface HeadingProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type HeadingType = FunctionComponent<HeadingProps>

const Heading: HeadingType = ({ children, className, level = 'h2' }) => {
  const HeadingComponent = ({
    ...props
  }: JSX.HTMLAttributes<HTMLHeadingElement>) =>
    createElement(level, props, children)

  return <HeadingComponent className={className}>{children}</HeadingComponent>
}

Heading.displayName = 'Heading'

export default Heading
