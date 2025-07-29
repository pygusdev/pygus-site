import { Box, Text, Button, Flex, Container, VStack, HStack, Image, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Play, Sparkles, Star, Users, Award, Zap, Heart, Shield } from 'lucide-react'
import LogoImg from '../../assets/logoImg.svg'
import imageCell from '../../assets/imageCell.png'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const HeroSection = () => {
  // Removido dados fictícios - será substituído por conteúdo real quando disponível

  return (
    <Box
      minH="100vh"
      position="relative"
      background="radial-gradient(ellipse at top, #AFD6F1 0%, #FEFFFF 45%, #F0F8FD 100%)"
      overflow="hidden"
    >
      {/* Rich Background Elements */}
      <MotionBox
        position="absolute"
        top="5%"
        right="5%"
        width="500px"
        height="500px"
        borderRadius="40px"
        background="linear-gradient(135deg, rgba(244,115,39,0.15), rgba(244,115,39,0.02))"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="10%"
        left="0%"
        width="400px"
        height="400px"
        borderRadius="40px"
        background="linear-gradient(135deg, rgba(175,214,241,0.2), rgba(175,214,241,0.05))"
        animate={{
          rotate: [0, 15, 0],
          scale: [1, 0.9, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric Shapes */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        width="100px"
        height="100px"
        background="linear-gradient(45deg, #F47327, #FF6B35)"
        borderRadius="20px"
        opacity={0.1}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        top="60%"
        right="15%"
        width="80px"
        height="80px"
        background="linear-gradient(45deg, #AFD6F1, #CCE5F6)"
        borderRadius="15px"
        opacity={0.2}
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Enhanced Floating Sparkles */}
      {[...Array(15)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          left={`${5 + (i * 7)}%`}
          top={`${10 + (i * 6)}%`}
          color={i % 3 === 0 ? "#F47327" : i % 3 === 1 ? "#AFD6F1" : "#FFD700"}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i * 0.3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          <Sparkles size={12 + (i % 4) * 3} />
        </MotionBox>
      ))}

      {/* Floating Icons */}
      {[Heart, Shield, Star].map((Icon, i) => (
        <MotionBox
          key={i}
          position="absolute"
          left={`${20 + (i * 25)}%`}
          top={`${15 + (i * 20)}%`}
          color="rgba(244,115,39,0.3)"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + (i * 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        >
          <Icon size={24 + (i * 8)} />
        </MotionBox>
      ))}

      {/* Animated Gradient Squares */}
      <MotionBox
        position="absolute"
        top="60%"
        right="20%"
        width="120px"
        height="120px"
        borderRadius="25px"
        background="linear-gradient(135deg, rgba(244,115,39,0.2), rgba(244,115,39,0.05))"
        filter="blur(20px)"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        top="30%"
        left="15%"
        width="80px"
        height="80px"
        borderRadius="20px"
        background="linear-gradient(135deg, rgba(175,214,241,0.3), rgba(175,214,241,0.1))"
        filter="blur(15px)"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main Content */}
      <Container maxW="1400px" h="100vh" pt="80px">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} h="100%" alignItems="center">
          
          {/* Left Content */}
          <GridItem>
            <VStack spacing={8} align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }}>
              
              {/* Logo */}
              <MotionBox
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                filter="drop-shadow(0 15px 40px rgba(244,115,39,0.4))"
              >
                <Image 
                  src={LogoImg} 
                  alt="Pygus Logo" 
                  width={{ base: "200px", md: "280px", lg: "320px" }}
                  height="auto"
                />
              </MotionBox>

              {/* Subtitle */}
              <MotionText
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="500"
                maxW="600px"
                color="#52525B"
                lineHeight="1.4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Desenvolvido para{" "}
                <Text as="span" color="#F47327" fontWeight="700">
                  transformar a fala
                </Text>{" "}
                de crianças com transtorno dos sons da fala
              </MotionText>

              {/* Espaço para futuros elementos quando dados reais estiverem disponíveis */}

                          {/* Botões removidos - agora estão apenas na seção de download */}

            </VStack>
          </GridItem>

          {/* Right Content - Phone Mockup */}
          <GridItem display={{ base: "none", lg: "block" }}>
            <MotionBox
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              position="relative"
              h="600px"
            >
              {/* Background Glow */}
              <MotionBox
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="400px"
                height="400px"
                borderRadius="50%"
                background="radial-gradient(circle, rgba(244,115,39,0.2), transparent)"
                filter="blur(60px)"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Phone Image */}
              <MotionBox
                position="relative"
                zIndex={2}
                filter="drop-shadow(0 20px 60px rgba(0,0,0,0.3))"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image 
                  src={imageCell} 
                  alt="Pygus App Preview" 
                  maxH="500px"
                  objectFit="contain"
                />
              </MotionBox>

              {/* Floating Elements around Phone */}
              {[...Array(6)].map((_, i) => (
                <MotionBox
                  key={i}
                  position="absolute"
                  top={`${20 + (i * 15)}%`}
                  left={`${10 + (i * 15)}%`}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3 + (i * 0.5),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  <Box
                    w="12px"
                    h="12px"
                    borderRadius="3px"
                    bg={i % 2 === 0 ? "#F47327" : "#AFD6F1"}
                    opacity={0.6}
                  />
                </MotionBox>
              ))}

            </MotionBox>
          </GridItem>

        </Grid>

        {/* Scroll Indicator */}
        <MotionBox
          position="absolute"
          bottom="8%"
          left="50%"
          transform="translateX(-50%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <VStack spacing={2}>
            <Text fontSize="sm" color="#52525B">
              Deslize para explorar
            </Text>
            <MotionBox
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              color="#F47327"
            >
              <ChevronDown size={24} />
            </MotionBox>
          </VStack>
        </MotionBox>

      </Container>
    </Box>
  )
}