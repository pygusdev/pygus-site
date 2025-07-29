import { Box, Text, Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import LogoImg from '../../assets/logoImg.svg'

interface LoadingScreenProps {
  isLoading: boolean
  onComplete: () => void
}

export const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer)
            setTimeout(onComplete, 500)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(timer)
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FD 50%, #AFD6F1 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
          }}
        >
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image 
              src={LogoImg} 
              alt="Pygus Logo" 
              width="200px"
              height="auto"
            />
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Text
              fontSize="2xl"
              fontWeight="500"
              color="#F47327"
              fontFamily="Poppins"
              mt={8}
              background="linear-gradient(135deg, #F47327, #FF6B35)"
              backgroundClip="text"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Carregando...
            </Text>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              width: '300px',
              height: '4px',
              backgroundColor: 'rgba(244, 115, 39, 0.2)',
              borderRadius: '2px',
              marginTop: '30px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #F47327, #FF6B35)',
                borderRadius: '2px',
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: `rgba(244, 115, 39, ${0.3 + (i * 0.1)})`,
                left: `${20 + (i * 12)}%`,
                top: `${30 + (i * 8)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}