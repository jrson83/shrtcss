#!/usr/bin/env node
import { createWriteStream } from 'node:fs'
import { get } from 'node:https'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

// https://zellwk.com/blog/async-await-in-loops/

// https://icones.netlify.app/collection/ion
const defaultIcons = [
  'ellipsis-vertical',
  'game-controller',
  'logo-github',
  'md-expand',
  'playstation',
  'warning-outline',
  'ios-add',
  'ios-add-circle',
  'ios-add-circle-outline',
  'ios-arrow-back',
  'ios-arrow-forward',
  'ios-calendar',
  'ios-checkmark',
  'ios-checkmark-circle',
  'ios-checkmark-circle-outline',
  'ios-clock-outline',
  'ios-close',
  'ios-close-circle',
  'ios-close-circle-outline',
  'ios-document',
  'ios-exit',
  'ios-help',
  'ios-help-circle',
  'ios-help-circle-outline',
  'ios-information',
  'ios-information-circle',
  'ios-information-circle-outline',
  'ios-settings',
  'ios-warning',
]

function createSvgSprite(symbols) {
  return `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols.join(
    ''
  )}</defs></svg>`
}

function createSvgSymbol(svg, id) {
  return svg
    .replace(/<svg([^>]*)>/, `<symbol viewBox="0 0 512 512" id="${id}">`)
    .replace('</svg>', '</symbol>')
}

function streamToString(pkg = 'ion', icon = 'ios-exit') {
  const chunks = []
  const symbols = []

  return new Promise((resolve, reject) => {
    get(`https://api.iconify.design/${pkg}:${icon}.svg`, async (res) => {
      res.on('data', (data) => chunks.push(data))
      res.on('error', (err) => reject(err))
      res.on('end', async () => {
        const symbol = createSvgSymbol(
          Buffer.concat(chunks).toString('utf8'),
          icon
        )
        symbols.push(symbol)
        resolve(symbols)
      })
    })
  })
}

async function createSvgSpritemap(pkg = 'ion', icons = defaultIcons) {
  try {
    const promises = icons.map((icon) => {
      return streamToString('ion', icon)
    })

    const symbols = await Promise.all(promises)

    symbols.reduce((acc, item) => {
      return acc.concat(item)
    }, [])

    const fileStream = createWriteStream(
      resolve(
        cwd(),
        'packages',
        'react',
        'public',
        'assets',
        `${pkg}-spritemap.svg`
      )
    )

    fileStream.write(createSvgSprite(symbols))

    console.log(`Build success: ${pkg}-spritemap.svg`)
  } catch (err) {
    if (err instanceof Error) {
      console.error(`${err.name}: ${err.message}`)
      process.exit(1)
    }
  }
}

createSvgSpritemap('ion', defaultIcons)
