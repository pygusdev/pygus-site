import { Box, Text, Button, Flex, Container, VStack, HStack, Image, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Play, Sparkles, Star, Users, Award, Zap, Heart, Shield } from 'lucide-react'
import LogoImg from '../../assets/logoImg.svg'
import imageCell from '../../assets/imageCell.png'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const HeroSection = () => {
  const features = [
    { icon: Users, title: "10K+", subtitle: "Famílias Transformadas" },
    { icon: Star, title: "4.9", subtitle: "Avaliação dos Pais" },
    { icon: Award, title: "95%", subtitle: "Taxa de Sucesso" },
    { icon: Zap, title: "30min", subtitle: "Sessões Diárias" }
  ]

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
        borderRadius="50%"
        background="radial-gradient(circle, rgba(244,115,39,0.15), rgba(244,115,39,0.02))"
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
        borderRadius="50%"
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

      {/* Animated Gradient Orbs */}
      <MotionBox
        position="absolute"
        top="60%"
        right="20%"
        width="120px"
        height="120px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(244,115,39,0.2), rgba(244,115,39,0.05))"
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
        borderRadius="50%"
        background="radial-gradient(circle, rgba(175,214,241,0.3), rgba(175,214,241,0.1))"
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
      <Container maxW="1400px" h="100vh">
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
                  width={{ base: "250px", md: "350px", lg: "450px" }}
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

              {/* Features Stats */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                w="100%"
              >
                <Grid templateColumns="repeat(2, 1fr)" gap={6} maxW="400px">
                  {features.map((feature, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.9 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <VStack
                        p={4}
                        bg="rgba(255,255,255,0.8)"
                        borderRadius="xl"
                        boxShadow="0 8px 32px rgba(244,115,39,0.1)"
                        border="1px solid"
                        borderColor="rgba(244,115,39,0.2)"
                        spacing={2}
                        backdropFilter="blur(10px)"
                      >
                        <Box color="#F47327">
                          <feature.icon size={20} />
                        </Box>
                        <Text fontSize="lg" fontWeight="800" color="#F47327">
                          {feature.title}
                        </Text>
                        <Text fontSize="xs" color="#52525B" textAlign="center">
                          {feature.subtitle}
                        </Text>
                      </VStack>
                    </MotionBox>
                  ))}
                </Grid>
              </MotionBox>

            {/* CTA Buttons */}
            <HStack 
              spacing={4} 
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              flexWrap="wrap"
              justify="center"
            >
              <MotionButton
                size="lg"
                bg="#F47327"
                color="white"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="600"
                boxShadow="0 10px 40px rgba(244,115,39,0.3)"
                leftIcon={<Download size={20} />}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 50px rgba(244,115,39,0.4)",
                  bg: "#E85D00"
                }}
                whileTap={{ scale: 0.98 }}
                _hover={{ bg: "#E85D00" }}
              >
                Baixar App
              </MotionButton>

              <MotionButton
                size="lg"
                variant="outline"
                borderColor="#F47327"
                color="#F47327"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="600"
                borderWidth="2px"
                leftIcon={<Play size={20} />}
                whileHover={{ 
                  scale: 1.05,
                  bg: "rgba(244,115,39,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                _hover={{ bg: "rgba(244,115,39,0.1)" }}
              >
                Ver Demonstração
              </MotionButton>
            </HStack>

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
                    borderRadius="50%"
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