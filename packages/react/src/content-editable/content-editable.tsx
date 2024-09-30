import type { SHRTComponentPropsWithoutRef } from '@shrtcss/react'

export interface ContentEditableProps
  extends SHRTComponentPropsWithoutRef<'div'> {
  'data-id': number
  content: string
  spellcheck?: boolean
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
  ...rest
}: ContentEditableProps) {
  return (
    <div
      {...rest}
      data-id={rest['data-id']}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: editable
      dangerouslySetInnerHTML={{ __html: content }}
      contentEditable
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
