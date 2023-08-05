import { useEffect, useRef } from 'react'

const useCloseOnClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [callback, ref])

  return ref
}

export { useCloseOnClickOutside }
