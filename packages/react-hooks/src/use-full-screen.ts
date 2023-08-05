/* https://gist.github.com/jrson83/4af38c6ad5c2a85003dcd22ba63a1801 */
import { type MutableRefObject, useLayoutEffect, useState } from 'react'

type FullScreenState = boolean
type ToggleFullScreen = () => void

function useFullScreen<E extends HTMLElement>(
  ref: MutableRefObject<E>
): [FullScreenState, ToggleFullScreen] {
  const [isFullScreen, setFullScreen] = useState(
    Boolean(document.fullscreenElement)
  )

  useLayoutEffect(() => {
    const onFullscreenChange = () => {
      console.log(isFullScreen)
      setFullScreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [setFullScreen])

  const toggleFullScreen = () => {
    if (!isFullScreen) ref.current?.requestFullscreen()
    else document.exitFullscreen()
  }

  return [isFullScreen, toggleFullScreen]
}

export { useFullScreen }
