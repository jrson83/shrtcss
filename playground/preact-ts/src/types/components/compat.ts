/** include missing types: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L819C5-L823C74 */
export type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Omit<P, 'ref'>
    : P
  : P

/** include missing types: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L851 */
export type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
  ComponentProps<T>
>

/** include missing types: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L835C4-L835C84 */
export type PropsWithChildren<P = unknown> = P & {
  children?: VNode | undefined
}
