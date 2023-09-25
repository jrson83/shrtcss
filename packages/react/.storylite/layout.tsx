import { Tab, Tabs } from '@/src'

export function Layout(_props: never) {
  return (
    <div className="story-wrapper story-wrapper-doc">
      <Tabs ariaLabel="Example Tabs" color={'accent'}>
        <Tab title="Documentation">
          <p>Example Text #1</p>
        </Tab>
        <Tab title="Props">
          <p>Example Text #2</p>
        </Tab>
      </Tabs>
    </div>
  )
}
