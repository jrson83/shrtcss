import { useCallback, useEffect, useRef } from 'react'

const hasCurrentFocus = () =>
  typeof document !== 'undefined' && document.hasFocus()

const useWindowFocus = () => {
  const hasFocus = useRef(hasCurrentFocus())

  useEffect(() => {
    const onFocus = () => {
      hasFocus.current = true
    }
    const onBlur = () => {
      hasFocus.current = false
    }

    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)

    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [])

  return useCallback(() => hasFocus.current, [])
}

export { useWindowFocus }
