import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const rafRef = useRef<number>()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateMousePosition = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', updateMousePosition, { passive: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements with a delay to ensure DOM is ready
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input, textarea, select'
      )

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true })
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true })
      })

      return interactiveElements
    }

    const timer = setTimeout(() => {
      const elements = addListeners()
      
      return () => {
        elements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #F47327, #FF6B35)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(244, 115, 39, 0.3)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  )
}