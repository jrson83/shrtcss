import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  type MockInstance,
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'
import { Link } from '../link'
import { Route } from '../route'
import Router from './router'

const HomePage = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const AboutPage = () => (
  <div>
    <h1>About</h1>
  </div>
)

describe('Router component test', () => {
  let linkEvent: ReturnType<(typeof userEvent)['setup']>
  let spyLink: MockInstance

  beforeEach(() => {
    linkEvent = userEvent.setup()
    spyLink = vi.spyOn(linkEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render default route', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Router>
        {children}
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    )

    render(
      <nav>
        <Link href="/about">Test</Link>
      </nav>,
      { wrapper }
    )

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Home')

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    await linkEvent.click(link)

    expect(screen.queryByRole('heading')).toHaveTextContent('About')

    expect(spyLink).toHaveBeenCalledOnce()
  })
})
