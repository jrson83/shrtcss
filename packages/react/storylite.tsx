import './setup.style.scss'
import '@storylite/storylite/styles.css'

import { SLAddonPropsWithoutId, renderStoryLiteApp } from '@storylite/storylite'
import stories from '@storylite/vite-plugin:stories'

const rootElement = document.getElementById('root') as HTMLElement

renderStoryLiteApp(rootElement, stories, {
  title: ' ⚡️ StoryLite shrtcss',
  defaultStory: 'index',
  iframeProps: {
    style: {
      // padding: '10px',
    },
  },
  iframeOptions: {
    useDefaultStyles: false,
  },
  addons: [
    // ['id-of-addon-to-exclude', false],
    [
      'custom-addon',
      {
        defaultContent: <span>👋</span>,
        stateful: false,
        onClick: (ctx) => {
          // eslint-disable-next-line no-console
          console.log('custom-addon context', ctx)
          alert('You clicked the custom addon!')
        },
      } satisfies SLAddonPropsWithoutId<false>,
    ],
  ],
})
