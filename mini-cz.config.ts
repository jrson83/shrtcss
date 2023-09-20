import { defineConfig } from 'mini-cz'

export default defineConfig({
  kinds: [
    {
      name: 'feat',
      description: 'A new feature',
    },
    {
      name: 'fix',
      description: 'A bug fix',
    },
    {
      name: 'docs',
      description: 'Documentation only changes',
    },
    {
      name: 'style',
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      name: 'refactor',
      description: 'A code change that neither fixes a bug nor adds a feature',
    },
    {
      name: 'perf',
      description: 'A code change that improves performance',
    },
    {
      name: 'test',
      description: 'Adding missing tests or correcting existing tests',
    },
    {
      name: 'chore',
      description:
        'Changes that do not modify src or test files. Such as updating build tasks, package manager configs, etc.',
    },
  ],
  scopes: ['workspace', 'core', 'react', 'react-hooks'],
})
