import './setup.style.scss'
import '@storylite/storylite/styles.css'

import { renderStoryLiteApp } from '@storylite/storylite'
import stories from '@storylite/vite-plugin:stories'

const rootElement = document.getElementById('root') as HTMLElement

renderStoryLiteApp(rootElement, stories, {
  title: ' ⚡️ StoryLite shrtcss',
  defaultStory: 'index',
  iframeOptions: {
    useDefaultStyles: false,
  },
})
