type DividerProps = {}

type DividerType = React.FC<React.HTMLAttributes<HTMLHRElement> & DividerProps>

const Divider: DividerType = () => {
  return <hr />
}

export default Divider
