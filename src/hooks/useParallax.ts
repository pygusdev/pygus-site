import { useEffect, useState, useCallback, useRef } from 'react'
import { useInView as useInViewLib } from 'react-intersection-observer'

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.pageYOffset * speed)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export const useInView = (threshold: number = 0.1) => {
  const { ref, inView } = useInViewLib({
    threshold,
    triggerOnce: true,
    rootMargin: '50px'
  })

  return [ref, inView] as const
}