import { useEffect, useState, useCallback } from 'react'

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export const useInView = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!element || typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsInView(entry.isIntersecting)
        }
      },
      { threshold }
    )

    try {
      observer.observe(element)
    } catch (error) {
      console.warn('Error observing element:', error)
    }

    return () => {
      try {
        if (element) {
          observer.unobserve(element)
        }
        observer.disconnect()
      } catch (error) {
        console.warn('Error cleaning up observer:', error)
      }
    }
  }, [element, threshold])

  const setRef = useCallback((node: HTMLElement | null) => {
    if (node !== element) {
      setElement(node)
    }
  }, [element])

  return [setRef, isInView] as const
}