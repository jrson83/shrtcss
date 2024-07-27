import '@storylite/storylite/styles.css'
import './styles/storylite-ui.css'

// import other StoryLite UI styles here

import '../setup.style.scss'

import stories from '@storylite/vite-plugin:stories'
import { renderStoryLiteApp } from '@storylite/storylite'

import config from './config'

const rootElement = document.getElementById('root') as HTMLElement

renderStoryLiteApp(rootElement, stories, config)
