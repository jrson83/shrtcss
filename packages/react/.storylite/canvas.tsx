/// <reference types="@storylite/vite-plugin/virtual" />

import '@storylite/storylite/styles.css'

import './styles/storylite-iframe.css'
import './styles/storylite-ui.css'

// import iframe-scope styles here

import '../setup.style.scss'

import stories from '@storylite/vite-plugin:stories'
import { renderStoryLiteApp } from '@storylite/storylite'

import config from './config'

const rootElement = document.getElementById('root')

renderStoryLiteApp(rootElement!, stories, config)
