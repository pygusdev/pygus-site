import { Box, Text, Button, Flex, Container, VStack, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Play } from 'lucide-react'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const HeroSection = () => {
  return (
    <Box
      minH="100vh"
      position="relative"
      background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
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
        background="linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
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
        background="linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))"
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

      {/* Main Content */}
      <Container maxW="1200px" h="100vh">
        <Flex align="center" justify="center" h="100%">
          <VStack spacing={8} textAlign="center" color="white">
            
            {/* Logo/Title */}
            <MotionText
              fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
              fontWeight="900"
              background="linear-gradient(135deg, #fff 0%, #e0e7ff 100%)"
              backgroundClip="text"
              textFillColor="transparent"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              letterSpacing="-0.02em"
            >
              PYGUS
            </MotionText>

            {/* Subtitle */}
            <MotionText
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="400"
              maxW="600px"
              opacity={0.9}
              lineHeight="1.6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Transformando a comunicação de crianças através da tecnologia e inovação
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
                bg="white"
                color="purple.600"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="600"
                boxShadow="0 10px 40px rgba(0,0,0,0.2)"
                leftIcon={<Download size={20} />}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 50px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                _hover={{ bg: "gray.50" }}
              >
                Baixar App
              </MotionButton>

              <MotionButton
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="600"
                borderWidth="2px"
                leftIcon={<Play size={20} />}
                whileHover={{ 
                  scale: 1.05,
                  bg: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
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
                <Text fontSize="sm" opacity={0.8}>
                  Deslize para explorar
                </Text>
                <MotionBox
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
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