import './styles/storylite-ui.css'
import '@storylite/storylite/styles.css'

// import other StoryLite UI styles here

import '../setup.style.scss'

import { renderStoryLiteApp } from '@storylite/storylite'
import stories from '@storylite/vite-plugin:stories'

import config from './config'

const rootElement = document.getElementById('root') as HTMLElement

renderStoryLiteApp(rootElement, stories, config)
