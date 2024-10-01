import type { SHRTComponentPropsWithoutRef } from '@shrtcss/react'
import { cx } from 'classix'

export interface ContentEditableProps
  extends SHRTComponentPropsWithoutRef<'div'> {
  'data-id': number
  content: string
  spellcheck?: boolean
  className?: string
}

export default function ContentEditable({
  content,
  spellcheck = false,
  lang = 'en',
  onChange,
  onBlur,
  onFocus,
  onInput,
  onKeyDown,
  className,
  ...rest
}: ContentEditableProps) {
  return (
    <div
      {...rest}
      className={cx(className)}
      data-id={rest['data-id']}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: editable
      dangerouslySetInnerHTML={{ __html: content }}
      contentEditable={true}
      lang={lang}
      spellCheck={spellcheck}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onInput={onInput}
      onKeyDown={onKeyDown}
    />
  )
}
