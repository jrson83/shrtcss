import Heading from './heading'
import './heading.style.scss'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components',
} satisfies StoryDefault

export const HeadingScreen: Story = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Heading</h1>
      <p>
        Display HTML headings with the <code>&#x3C;h1&#x3E;</code> to{' '}
        <code>&#x3C;h5&#x3E;</code> tags.
      </p>
      <div className='example-wrapper column'>
        <Heading level={'h1'}>
          Heading #1 <code>&lt;h1&gt;</code>
        </Heading>
        <Heading level={'h2'}>
          Heading #2 <code>&lt;h2&gt;</code>
        </Heading>
        <Heading level={'h3'}>
          Heading #3 <code>&lt;h3&gt;</code>
        </Heading>
        <Heading level={'h4'}>
          Heading #4 <code>&lt;h4&gt;</code>
        </Heading>
        <Heading level={'h5'}>
          Heading #5 <code>&lt;h5&gt;</code>
        </Heading>
        <Heading level={'h6'}>
          Heading #6 <code>&lt;h6&gt;</code>
        </Heading>
      </div>
    </div>
  )
}

HeadingScreen.storyName = 'Heading'
