import { type RefObject, useCallback, useEffect, useRef } from 'react'

export interface UseAnimateOptions<T extends HTMLElement> {
  animate: boolean
  elementRef: RefObject<T>
  /** Options for configuring keyframe-based animations */
  animationOptions?: KeyframeAnimationOptions
  animations?: {
    start: Keyframe[]
    end: Keyframe[]
  }
}
const useAnimate = <T extends HTMLElement>({
  animate,
  elementRef,
  animationOptions = {
    easing: 'ease-in-out',
    duration: 1000,
    fill: 'forwards',
  },
  animations = {
    start: [{ opacity: '0' }, { opacity: '1' }],
    end: [{ opacity: '1' }, { opacity: '0' }],
  },
}: UseAnimateOptions<T>) => {
  const shouldRender = useRef<boolean>(false)

  useEffect(() => {
    if (animate) {
      elementRef.current?.animate(animations.start, animationOptions)
      shouldRender.current = true
    } else if (!animate && shouldRender.current) {
      elementRef.current?.animate(animations.end, animationOptions)
      shouldRender.current = false
    }
  }, [animate])

  return useCallback(() => shouldRender.current, [])
}

export { useAnimate }
