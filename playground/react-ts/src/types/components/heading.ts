export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type HeadingType = React.FC<React.PropsWithChildren & HeadingProps>
