import { matchRoutes } from './utils/match-routes.js'

const useMatch = (href: string, pathname: string) => {
  const match = matchRoutes(href, pathname)

  if (!match) return null

  return match
}

export { useMatch }
