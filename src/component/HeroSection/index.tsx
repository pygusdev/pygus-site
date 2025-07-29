import { Box, Text, Button, Flex, Container, VStack, HStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Play, Sparkles } from 'lucide-react'
import LogoImg from '../../assets/logoImg.svg'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const HeroSection = () => {
  return (
    <Box
      minH="100vh"
      position="relative"
      background="linear-gradient(135deg, #AFD6F1 0%, #FEFFFF 50%, #F0F8FD 100%)"
      overflow="hidden"
    >
      {/* Background Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="10%"
        width="400px"
        height="400px"
        borderRadius="50%"
        background="linear-gradient(45deg, rgba(244,115,39,0.1), rgba(244,115,39,0.05))"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="15%"
        left="5%"
        width="300px"
        height="300px"
        borderRadius="30px"
        background="linear-gradient(45deg, rgba(244,115,39,0.08), rgba(244,115,39,0.03))"
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Sparkles */}
      {[...Array(8)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          left={`${10 + (i * 12)}%`}
          top={`${20 + (i * 8)}%`}
          color="#F47327"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <Sparkles size={16 + (i % 3) * 4} />
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
      <Container maxW="1200px" h="100vh">
        <Flex align="center" justify="center" h="100%">
          <VStack spacing={8} textAlign="center" color="#27272A">
            
            {/* Logo */}
            <MotionBox
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              filter="drop-shadow(0 10px 30px rgba(244,115,39,0.3))"
            >
              <Image 
                src={LogoImg} 
                alt="Pygus Logo" 
                width={{ base: "200px", md: "300px", lg: "400px" }}
                height="auto"
              />
            </MotionBox>

            {/* Subtitle */}
            <MotionText
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="400"
              maxW="600px"
              color="#52525B"
              lineHeight="1.6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Desenvolvido para transformar a fala de crianças com transtorno dos sons da fala
            </MotionText>

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

            {/* Scroll Indicator */}
            <MotionBox
              position="absolute"
              bottom="10%"
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

          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}