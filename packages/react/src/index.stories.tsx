import { Story } from '@storylite/storylite'

export default {
  title: 'Introduction',
  navigation: {
    icon: <span>🏠</span>,
    // iconExpanded: <span>-🏠</span>,
    order: 0, // put on top
    hidden: false, // dont show the default export component in the navigation
  },
  component: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <img
        src="/images/shrtcss-logo.png"
        alt="shrtcss Logo"
        style={{ maxWidth: '350px' }}
      />
      <p>A lightweight SCSS/CSS library.</p>
      <h2>Documentation</h2>
      <p>shrtcss is currently in development.</p>
    </div>
  ),
} satisfies Story
