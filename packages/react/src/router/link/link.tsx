import { matchRoutes, useHistory } from '@shrtcss/react-hooks'
import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { useRouter } from '../router/router.js'

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  isActive?: string
}

export default function Link({ children, ...props }: LinkProps) {
  const { location } = useRouter()
  const history = useHistory()

  const handleOnNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      props.target === '_blank' ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return
    }

    event.preventDefault()

    history.push(props.href as string)
    window.dispatchEvent(new PopStateEvent('popstate'))

    if (props.onClick) props.onClick.apply(undefined, [event])
  }

  const isActive =
    props.href && matchRoutes(props.href as string, location) !== null

  return (
    <a
      {...props}
      className={[
        props.className && props.className,
        isActive && props.isActive,
      ]
        .filter((e) => !!e)
        .join(' ')}
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={handleOnNavigate}
    >
      {children}
    </a>
  )
}
