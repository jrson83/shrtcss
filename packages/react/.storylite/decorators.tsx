import type { SLDecoratorContext } from '@storylite/storylite'
import { cx } from 'classix'

export const decoratorsTemplate = (column = false) => {
  return [
    (
      Story: (props: Record<string, unknown>) => JSX.Element,
      context:
        | SLDecoratorContext<(props: Record<string, unknown>) => JSX.Element>
        | undefined
    ) => {
      return (
        <div className={cx('story-wrapper', column && 'story-wrapper-column')}>
          <Story {...context?.args} />
        </div>
      )
    },
  ]
}
