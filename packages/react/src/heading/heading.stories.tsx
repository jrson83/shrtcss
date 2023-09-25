import { decoratorsTemplate } from '@/storylite/decorators'
import { Story } from '@storylite/storylite'
import Heading from './heading'
import Docs from './heading.docs.mdx'

type StoryType = Story<typeof Heading>
type StoryDocsType = Story<typeof Docs>

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

export default {
  title: 'Heading',
  component: Heading,
  args: {
    as: 'h2',
    children: 'Heading #2',
  },
  decorators: decoratorsTemplate(true),
} satisfies StoryType

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  component: () => (
    <>
      {headings.map((heading, idx) => (
        <Heading as={heading} key={heading}>
          Heading #{idx + 1} <code>&lt;{heading}&gt;</code>
        </Heading>
      ))}
    </>
  ),
}
