import './setup.style.scss'

export const argTypes = {
  background: {
    control: { type: 'background' },
    options: ['var(--shrt-color-bg)'],
    defaultValue: 'var(--shrt-color-bg)',
  },
}
