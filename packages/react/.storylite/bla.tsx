import { FC } from 'react'

const withDecorators = (Component: FC<any>) => (props: any) => {
  return <Component {...props} />
}

export default withDecorators
