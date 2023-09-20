import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  SpyInstance,
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'
import Tabs, { Tab } from './tabs'

const Wrapper = () => {
  return (
    <Tabs ariaLabel="Example Tabs" color={'accent'} data-testid="test-tabs">
      <Tab title="Tab #1" data-testid="test-tab-panel-1">
        <p>Example Text #1</p>
      </Tab>
      <Tab title="Tab #2" data-testid="test-tab-panel-2">
        <p>Example Text #2</p>
      </Tab>
      <Tab title="Tab #3" data-testid="test-tab-panel-3">
        <p>Example Text #3</p>
      </Tab>
    </Tabs>
  )
}

describe('Tabs component test', () => {
  let tabsEvent: ReturnType<typeof userEvent['setup']>
  let spyButton: SpyInstance

  beforeEach(() => {
    tabsEvent = userEvent.setup()
    spyButton = vi.spyOn(tabsEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render default tabs', async () => {
    render(<Wrapper />)

    const tabs = screen.getByTestId('test-tabs')
    expect(tabs).toBeInTheDocument()

    const tabOne = screen.getByRole('tab', { selected: true })
    expect(tabOne).toBeInTheDocument()
    expect(tabOne).toHaveTextContent('Tab #1')

    const tabTwoAndThree = screen.getAllByRole('tab', { selected: false })
    expect(tabTwoAndThree[0]).toBeInTheDocument()
    expect(tabTwoAndThree[1]).toBeInTheDocument()

    const tabPanelOne = screen.getByTestId('test-tab-panel-1')
    expect(tabPanelOne).toBeInTheDocument()
    expect(tabPanelOne).toHaveTextContent('Example Text #1')

    expect(screen.queryByTestId('test-tab-panel-2')).toBeNull()

    await tabsEvent.click(tabTwoAndThree[0])

    expect(spyButton).toHaveBeenCalledOnce()

    const tabPanelTwo = screen.getByTestId('test-tab-panel-2')
    expect(tabPanelTwo).toBeInTheDocument()
    expect(tabPanelTwo).toHaveTextContent('Example Text #2')
  })
})
