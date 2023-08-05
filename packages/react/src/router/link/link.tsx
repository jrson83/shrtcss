import { useRouter } from '../router'
import type { LinkType } from './link.types'
import { matchRoutes, useHistory } from '@shrtcss/react-hooks'

const Link: LinkType = ({ children, ...props }) => {
  const { location } = useRouter()
  const history = useHistory()

  const handleOnNavigate = (event: React.MouseEvent) => {
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
  }

  const isActive =
    props.href && matchRoutes(props.href as string, location) !== null

  return (
    <a
      {...props}
      className={[
        props.className && props.className,
        isActive && props.activeClassName,
      ]
        .filter((e) => !!e)
        .join(' ')}
      // rome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={handleOnNavigate}
    >
      {children}
    </a>
  )
}

Link.displayName = 'Link'

export default Link
