import { Divider, Heading } from '#/components/ui'

type AppType = FunctionComponent

const App: AppType = () => {
  return (
    <div>
      <Heading level={'h1'}>
        Heading <small>h1</small>
      </Heading>
      <Heading level={'h2'}>
        Heading <small>h2</small>
      </Heading>
      <Heading level={'h3'}>
        Heading <small>h3</small>
      </Heading>
      <Heading level={'h4'}>
        Heading <small>h4</small>
      </Heading>
      <Heading level={'h5'}>
        Heading <small>h5</small>
      </Heading>
      <Heading level={'h6'}>
        Heading <small>h6</small>
      </Heading>
      <Divider />
    </div>
  )
}

export default App
