import type {
  SLAddonPropsWithoutId,
  SLAppComponentProps,
} from '@storylite/storylite'
import React from 'react'
import { Icon } from '../src/index.js'

const config: SLAppComponentProps = {
  title: ' ⚡️ StoryLite shrtcss',
  defaultStory: 'index-default',
  useIframeStyles: false,
  iframeProps: {
    style: {
      // padding: '10px',
    },
  },
  addons: [
    [
      'github-link',
      {
        defaultContent: (
          <span className="ext-link ext-link-github">
            <Icon title="Github" iconId={'logo-github'} />
          </span>
        ),
        tooltip: 'Github Repository',
        placement: 'right',
        stateful: false,
        getHref: () => {
          return 'https://github.com/jrson83/shrtcss'
        },
        hrefTarget: '_blank',
      } satisfies SLAddonPropsWithoutId<false>,
    ],
    /* [
      'stackblitz-link',
      {
        defaultContent: (
          <span className="ext-link ext-link-stackblitz">
            <Icon title="Stackblitz" iconId={'flash'} />
          </span>
        ),
        tooltip: 'View story in Stackblitz',
        placement: 'right',
        stateful: false,
        getHref: () => {
          return 'https://stackblitz.com/edit/storylite-demo?file=stories/index.stories.tsx'
        },
        hrefTarget: '_blank',
      } satisfies SLAddonPropsWithoutId<false>,
    ], */
  ],
}

export default config
