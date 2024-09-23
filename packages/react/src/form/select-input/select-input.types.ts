import type { SHRTComponentPropsWithoutRef } from '../../types.js'

export interface SelectInputProps<Item> {
  items: Item[]
  value: string
  labelExtractor: (item: Item) => string
  valueExtractor: (item: Item) => string
  /* onChange: (value: string, selectedItem: Item) => void */
}

export type SelectInputPropsx<Item> =
  /* Omit< */
  SHRTComponentPropsWithoutRef<'select'> /* ,
  'onChange'
> */ &
    SelectInputProps<Item>

export type SelectInputType = <Item>(
  props: SelectInputPropsx<Item>
) => React.ReactNode
