import { type RefObject, useEffect, useRef } from 'react'

type EventNames = HTMLElementEventMap & WindowEventMap & DocumentEventMap
type ListenerElements = HTMLElement | Window | Document

function useEventListener<
  E extends EventNames[keyof EventNames],
  T extends ListenerElements
>(
  eventName: keyof Pick<
    EventNames,
    {
      [K in keyof EventNames]: EventNames[K] extends E ? K : never
    }[keyof EventNames]
  >,
  handler: EventListener,
  element?: RefObject<T> | undefined,
  options?: AddEventListenerOptions
): void {
  const savedHandler = useRef<EventListener>(handler)

  useEffect(() => {
    const targetElement: T | Window = element?.current || window
    if (!targetElement?.addEventListener) {
      return
    }

    if (savedHandler.current !== handler) {
      savedHandler.current = handler
    }

    const eventListener = (event: Event): void => {
      if (savedHandler && !!savedHandler.current) {
        savedHandler.current(event)
      }
    }

    targetElement.addEventListener(eventName, eventListener, options)

    return () => {
      targetElement.removeEventListener(eventName, eventListener, options)
    }
  }, [eventName, element, handler])
}

export { useEventListener }
