#!/usr/bin/env node
import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

const licensePath = resolve(cwd(), 'LICENSE')
const readmePath = resolve(cwd(), 'README.md')
const corePackageReadme = resolve(cwd(), 'packages', 'core', 'README.md')
const corePackageLicense = resolve(cwd(), 'packages', 'core', 'LICENSE')
const reactPackageReadme = resolve(cwd(), 'packages', 'react', 'README.md')
const reactPackageLicense = resolve(cwd(), 'packages', 'react', 'LICENSE')
const reactHooksPackageReadme = resolve(
  cwd(),
  'packages',
  'react-hooks',
  'README.md'
)
const reactHooksPackageLicense = resolve(
  cwd(),
  'packages',
  'react-hooks',
  'LICENSE'
)

async function main() {
  try {
    await Promise.all([
      await copyFile(readmePath, corePackageReadme),
      await copyFile(licensePath, corePackageLicense),
      await copyFile(readmePath, reactPackageReadme),
      await copyFile(licensePath, reactPackageLicense),
      await copyFile(readmePath, reactHooksPackageReadme),
      await copyFile(licensePath, reactHooksPackageLicense),
    ])
  } catch (err) {
    if (err instanceof Error) {
      console.error(`${err.name}: ${err.message}`)
      process.exit(1)
    }
  }
}

main()
