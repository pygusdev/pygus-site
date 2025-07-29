import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface SectionTransitionProps {
  children: React.ReactNode
  delay?: number
}

export const SectionTransition = ({ children, delay = 0 }: SectionTransitionProps) => {
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </MotionBox>
  )
}

export const FadeInUp = ({ children, delay = 0 }: SectionTransitionProps) => {
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </MotionBox>
  )
}

export const SlideInLeft = ({ children, delay = 0 }: SectionTransitionProps) => {
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </MotionBox>
  )
}

export const SlideInRight = ({ children, delay = 0 }: SectionTransitionProps) => {
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </MotionBox>
  )
}