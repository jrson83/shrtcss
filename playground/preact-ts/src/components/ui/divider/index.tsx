type DividerProps = {}

type DividerType = FunctionComponent<
  JSX.HTMLAttributes<HTMLHRElement> & DividerProps
>

const Divider: DividerType = () => {
  return <hr />
}

export default Divider
