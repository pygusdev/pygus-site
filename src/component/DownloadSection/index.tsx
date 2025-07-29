import { Box, Text, Button, Flex, Container, VStack, HStack, Image, Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Smartphone, Star, Users, Download } from 'lucide-react'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

export const DownloadSection = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Usuários Ativos" },
    { icon: Star, value: "4.8", label: "Avaliação" },
    { icon: Download, value: "50K+", label: "Downloads" },
  ]

  return (
    <Box
      py={20}
      background="linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)"
      position="relative"
    >
      <Container maxW="1200px">
        <VStack spacing={16}>
          
          {/* Section Header */}
          <VStack spacing={4} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="800"
                background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                backgroundClip="text"
                textFillColor="transparent"
                mb={4}
              >
                Baixe o Pygus
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="600px"
                lineHeight="1.6"
              >
                Disponível para iOS e Android. Comece sua jornada de transformação hoje mesmo.
              </Text>
            </MotionBox>
          </VStack>

          {/* Stats */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} w="100%">
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <VStack
                  p={8}
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 10px 40px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  spacing={4}
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    p={3}
                    borderRadius="xl"
                    background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  >
                    <stat.icon size={24} color="white" />
                  </Box>
                  <Text fontSize="3xl" fontWeight="800" color="gray.800">
                    {stat.value}
                  </Text>
                  <Text fontSize="md" color="gray.600" textAlign="center">
                    {stat.label}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>

          {/* Download Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <VStack spacing={8}>
              <HStack spacing={6} flexWrap="wrap" justify="center">
                
                {/* App Store Button */}
                <MotionButton
                  as="a"
                  href="https://apps.apple.com/br/app/pygus-profissional/id6514278911"
                  target="_blank"
                  size="lg"
                  h="auto"
                  p={6}
                  bg="black"
                  color="white"
                  borderRadius="2xl"
                  minW="200px"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 50px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  _hover={{ bg: "gray.800" }}
                >
                  <HStack spacing={4}>
                    <Image src={appleStoreSvg} w={8} h={8} alt="App Store" />
                    <VStack spacing={0} align="start">
                      <Text fontSize="xs" opacity={0.8}>
                        Baixar na
                      </Text>
                      <Text fontSize="lg" fontWeight="600">
                        App Store
                      </Text>
                    </VStack>
                  </HStack>
                </MotionButton>

                {/* Google Play Button */}
                <MotionButton
                  as="a"
                  href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                  target="_blank"
                  size="lg"
                  h="auto"
                  p={6}
                  bg="white"
                  color="black"
                  border="2px solid"
                  borderColor="gray.200"
                  borderRadius="2xl"
                  minW="200px"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                    borderColor: "gray.300"
                  }}
                  whileTap={{ scale: 0.98 }}
                  _hover={{ bg: "gray.50" }}
                >
                  <HStack spacing={4}>
                    <Image src={googlePlaySvg} w={8} h={8} alt="Google Play" />
                    <VStack spacing={0} align="start">
                      <Text fontSize="xs" opacity={0.6}>
                        Baixar no
                      </Text>
                      <Text fontSize="lg" fontWeight="600">
                        Google Play
                      </Text>
                    </VStack>
                  </HStack>
                </MotionButton>

              </HStack>

              {/* Additional Info */}
              <Text fontSize="sm" color="gray.500" textAlign="center">
                Gratuito para download • Compatível com iOS 12+ e Android 8+
              </Text>
            </VStack>
          </MotionBox>

        </VStack>
      </Container>
    </Box>
  )
}