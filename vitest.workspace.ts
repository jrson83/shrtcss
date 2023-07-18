import { resolve } from 'path'
import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'playground/*',
  {
    test: {
      globals: true,
      //include: ['src/__tests__/*.test.ts'],
      name: 'react-ts',
      environment: 'node',
      setupFiles: resolve(
        __dirname,
        './playground/react-ts/src/__tests__/vitest.setup.ts'
      ),
    },
  },
])
