import { type RefObject, useCallback, useEffect, useRef } from 'react'

export interface UseAnimateOptions {
  animate: boolean
  ref: RefObject<HTMLElement | null>
  /** Options for configuring keyframe-based animations */
  animationOptions?: KeyframeAnimationOptions
  animations?: {
    start: Keyframe[]
    end: Keyframe[]
  }
}
const useAnimate = ({
  animate,
  ref,
  animationOptions = {
    easing: 'ease-in-out',
    duration: 1000,
    fill: 'forwards',
  },
  animations = {
    start: [{ opacity: '0' }, { opacity: '1' }],
    end: [{ opacity: '1' }, { opacity: '0' }],
  },
}: UseAnimateOptions) => {
  const shouldRender = useRef<boolean>(false)

  useEffect(() => {
    if (animate && ref) {
      ref.current?.animate(animations.start, animationOptions)
      shouldRender.current = true
    } else if (!animate && shouldRender.current && ref) {
      ref.current?.animate(animations.end, animationOptions)
      shouldRender.current = false
    }
  }, [animate])

  return useCallback(() => shouldRender.current, [])
}

export { useAnimate }
