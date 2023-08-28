import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Introduction',
  icon: <span>🏠</span>,
  priority: 100,
} satisfies StoryMeta

export const Main: StoryComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <img
      src='/images/shrtcss-logo.png'
      alt='shrtcss Logo'
      style={{ maxWidth: '350px' }}
    />
    <p>A lightweight SCSS/CSS library.</p>
    <h2>Documentation</h2>
    <p>shrtcss is currently in development.</p>
  </div>
)

// Main.storyTitle = 'Main Component'
