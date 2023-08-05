export type TabProps = React.PropsWithChildren & {
  title: string
}

export type TabType = React.FC<
  React.PropsWithChildren & {
    title: string
  }
>

export type TabsType = React.FC<
  React.PropsWithChildren<{
    ariaLabel: string
    color?: 'accent' | 'info' | 'success' | 'warning' | 'danger'
  }>
>
