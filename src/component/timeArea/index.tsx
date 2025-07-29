import { Flex, Text, useBreakpointValue, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import mereImg from '../../assets/mereImg.png'
import joaoImg from '../../assets/joaoImage.png'
import thiagoImg from '../../assets/thiagoImg.png'
import samuelImg from '../../assets/samuelImg.png'
import catarinaImg from '../../assets/catarinaImg.png'
import { MemberItem } from '../memberItem'
import { useInView } from '../../hooks/useParallax'

export const TimeArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [ref, isInView] = useInView(0.2)
  
  const MotionFlex = motion(Flex)
  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  const timeDate = [
    {
      name: 'Mére Lander',
      phase: 'Um aplicativo para otimizar a terapia fonoaudiológica.',
      post: 'CEO',
      image: mereImg,
    },
    {
      name: 'Samuel dos Santos',
      phase: 'Pygus é a marca da sua terapia.',
      post: 'Sócio - Vendas/Administrativo',
      image: samuelImg,
    },
    {
      name: 'João Victor Lobão',
      phase: 'Conectando você ao mundo, palavra por palavra.',
      post: 'CTO',
      image: joaoImg,
    },
    {
      name: 'Thiago José',
      phase: 'Pygus, solução inovadoras para a fonoaudiologia.',
      post: 'Engenheiro de software',
      image: thiagoImg,
    },
    {
      name: 'Ana Catarina',
      phase: 'Tecnologia e cuidado: reinventando a fonoaudiologia.',
      post: 'CDO/Senior Product Design',
      image: catarinaImg,
    },
  ]

  return (
    <MotionFlex 
      alignItems="center" 
      flexDir="column" 
      id="contato"
      py={20}
      position="relative"
      ref={ref}
    >
      {/* Background decorative elements */}
      <MotionBox
        position="absolute"
        top="15%"
        left="8%"
        width="100px"
        height="100px"
        borderRadius="50%"
        background="linear-gradient(135deg, #AFD6F1, #CCE5F6)"
        opacity={0.3}
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="20%"
        right="10%"
        width="80px"
        height="80px"
        borderRadius="20px"
        background="linear-gradient(45deg, #F47327, #FFB366)"
        opacity={0.2}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionFlex 
        mt={10} 
        gap={1} 
        alignItems="center"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <MotionText
          fontSize={isMobile ? 'lg' : '3xl'}
          fontFamily="Poppins"
          fontWeight="300"
          color="#52525B"
        >
          Conheça nosso
        </MotionText>
        <MotionText
          fontSize={isMobile ? '2xl' : '3xl'}
          fontFamily="Poppins"
          fontWeight="500"
          color="#F47327"
          style={{
            background: 'linear-gradient(135deg, #F47327, #FF6B35)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          time
        </MotionText>
      </MotionFlex>
      
      <MotionFlex
        maxW="1000px"
        flexWrap="wrap"
        justifyContent="center"
        gap={10}
        mt={16}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {timeDate.map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1 
            } : { 
              opacity: 0, 
              y: 50, 
              scale: 0.9 
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5 + (index * 0.1),
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <MemberItem
              image={item.image}
              name={item.name}
              phase={item.phase}
              post={item.post}
            />
          </MotionBox>
        ))}
      </MotionFlex>
    </MotionFlex>
  )
}
