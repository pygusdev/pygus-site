import {
  Box,
  Text,
  Image,
  Button,
  Stack,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'
import imageCell from '../../assets/imageCell.png'
import { useParallax } from '../../hooks/useParallax'

export const DownloadArea: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const parallaxOffset = useParallax(0.3)

  const MotionBox = motion(Box)
  const MotionText = motion(Text)
  const MotionImage = motion(Image)
  const MotionButton = motion(Button)

  return (
    <>
      {isMobile ? (
        <Flex id="home" px={4} mt={8}>
          <Flex flexDir="column">
            <Text fontSize="80px" color="#F47327">
              PYGUS
            </Text>
            <Text fontWeight="light" fontSize="sm" color="#52525B" maxW="70%">
              Desenvolvido para transformar a fala de crianças com transtorno
              dos sons da fala.
            </Text>
            <Flex alignItems="center">
              <Image
                src={imageCell}
                alt="Imagem com 3 celulares"
                boxSize="auto"
                ml={8}
                pr={20}
              />
            </Flex>
            <Flex gap={4} justifyContent="center" mt={4}>
              <Button
                variant="outline"
                as="a"
                href="https://apps.apple.com/br/app/pygus-profissional/id6514278911"
                target="_blank"
                p={5}
              >
                <Image
                  src={appleStoreSvg}
                  w={6}
                  h={6}
                  mr={4}
                  alt="Logo apple"
                />
                <Box>
                  <Text fontSize="2xs">Download na</Text>
                  <Text fontWeight="medium" fontSize="sm">
                    App Store
                  </Text>
                </Box>
              </Button>
              <Button
                variant="outline"
                as="a"
                href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                target="_blank"
                p={5}
              >
                <Image
                  src={googlePlaySvg}
                  w={6}
                  h={6}
                  mr={4}
                  alt="Logo android"
                />
                <Box>
                  <Text fontSize="2xs">Download na</Text>
                  <Text fontWeight="medium" fontSize="sm">
                    Google Play
                  </Text>
                </Box>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex 
          id="home" 
          pl={20} 
          pt={20} 
          w="100%" 
          justifyContent="space-between"
          position="relative"
          overflow="hidden"
        >
          {/* Background decorative elements */}
          <MotionBox
            position="absolute"
            top="10%"
            left="5%"
            width="100px"
            height="100px"
            borderRadius="50%"
            background="linear-gradient(45deg, #AFD6F1, #CCE5F6)"
            opacity={0.3}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <MotionBox
            position="absolute"
            top="60%"
            left="10%"
            width="60px"
            height="60px"
            borderRadius="50%"
            background="linear-gradient(45deg, #F47327, #FF8A50)"
            opacity={0.2}
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <MotionBox textAlign="left" mr={8}>
            <MotionText 
              fontSize="184px" 
              color="#F47327"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, #F47327, #FF6B35, #F47327)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(244, 115, 39, 0.3)',
              }}
            >
              PYGUS
            </MotionText>
            <MotionText 
              fontWeight="light" 
              fontSize="32px" 
              color="#52525B"
                             initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
              maxW="600px"
              lineHeight="1.4"
            >
              Desenvolvido para transformar a fala de crianças com transtorno
              dos sons da fala.
            </MotionText>
            <Stack 
              direction="row" 
              spacing={6} 
              align="center" 
              mt={14}
              as={motion.div}
                             initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
              <MotionButton
                variant="outline"
                as="a"
                href="https://apps.apple.com/br/app/pygus-profissional/id123456789"
                target="_blank"
                p={6}
                borderColor="#E5E7EB"
                borderWidth="2px"
                borderRadius="16px"
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                  borderColor: "#F47327"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={appleStoreSvg} mr={4} alt="Logo apple" />
                <Box>
                  <Text fontSize="xs">Download na</Text>
                  <Text fontWeight="medium" fontSize="md">
                    App Store
                  </Text>
                </Box>
              </MotionButton>
              <MotionButton
                variant="outline"
                as="a"
                href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                target="_blank"
                p={6}
                borderColor="#E5E7EB"
                borderWidth="2px"
                borderRadius="16px"
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                  borderColor: "#F47327"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={googlePlaySvg} mr={4} alt="Logo android" />
                <Box>
                  <Text fontSize="xs">Download na</Text>
                  <Text fontWeight="medium" fontSize="md">
                    Google Play
                  </Text>
                </Box>
              </MotionButton>
            </Stack>
          </MotionBox>
          <Flex
            justifyContent="flex-end"
            w="100%"
            style={{
              background:
                'radial-gradient(75.96% 66.21% at 93.03% 14.84%, #AFD6F1 12.21%, #FEFFFF 100%)',
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <MotionImage
              src={imageCell}
              alt="Imagem com 3 celulares"
              boxSize="auto"
              ml={8}
              pr={20}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            />
          </Flex>
        </Flex>
      )}
    </>
  )
}
