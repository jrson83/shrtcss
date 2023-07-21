export interface HeadingProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type HeadingType = FunctionComponent<HeadingProps>
