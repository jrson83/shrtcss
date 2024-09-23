/* import { useCallback } from 'react' */
import type {
  SelectInputPropsx,
  SelectInputType,
} from './select-input.types.js'

const SelectInput: SelectInputType = <Item,>({
  value,
  items,
  labelExtractor,
  valueExtractor,
  onChange,
}: SelectInputPropsx<Item>) => {
  /* const handleOnValueChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const {
        target: { value: selectedValue },
      } = event

      const item = items.find((i) => valueExtractor(i) === selectedValue)

      if (!item) return
      onChange(selectedValue, item)
    },
    [items, value]
  ) */

  return (
    <select value={value} onChange={onChange}>
      {items.map((item) => {
        const itemLabel = labelExtractor(item)
        const itemValue = valueExtractor(item)

        return (
          <option key={itemValue} value={itemValue}>
            {itemLabel}
          </option>
        )
      })}
    </select>
  )
}

export default SelectInput
