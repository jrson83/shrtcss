import { pathToRegexp } from './path-to-regexp.js'

function matchRoutes(href: string, pathname: string) {
  const pattern = pathToRegexp(href)
  const path = decodeURIComponent(pathname)
  const match = path.match(pattern)

  if (!match) return null

  const matchedPathname = match[0]
  const captureGroups = match.groups

  return {
    pattern,
    params: captureGroups,
    pathname: matchedPathname,
  }
}

export { matchRoutes }
