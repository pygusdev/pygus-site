import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export const AnimatedBackground = () => {
  const particles = useMemo(() => {
    const particleArray: Particle[] = []
    const colors = ['#AFD6F1', '#CCE5F6', '#B2D8F2', '#DEEEFA', '#F0F8FD']
    
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    return particleArray
  }, [])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={-1}
      overflow="hidden"
      pointerEvents="none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${particle.color}40, transparent)`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="linear-gradient(135deg, rgba(175, 214, 241, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
      />
    </Box>
  )
}