import { Text, Image, Flex, useBreakpointValue, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import backgroundApp from '../../assets/backgroundApp.svg'
import resourcesPygus from '../../assets/resourcesPygus.png'
import { useParallax, useInView } from '../../hooks/useParallax'

export const AppArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const parallaxOffset = useParallax(0.2)
  const [ref, isInView] = useInView(0.3)
  
  const MotionFlex = motion(Flex)
  const MotionText = motion(Text)
  const MotionImage = motion(Image)
  const MotionBox = motion(Box)

  return (
    <>
      {isMobile ? (
        <Flex
          id="app"
          w="100%"
          h="700px"
          bgImage={backgroundApp}
          bgRepeat="no-repeat"
          bgSize="cover"
          mb={10}
          alignItems="flex-start"
        >
          <Flex width="100%" flexDir="column">
            <Flex justifyContent="flex-end" mt={24} px={16}>
              <Text
                fontFamily="Poppins"
                fontSize="sm"
                textAlign="right"
                maxW="1000px"
                color="#52525B"
                fontWeight="300"
              >
                O Pygus é um recurso com{' '}
                <Text
                  display="inline"
                  fontSize="lg"
                  color="#F47327"
                  fontWeight="500"
                >
                  pistas auditivas e visuais
                </Text>{' '}
                que propicia a percepção do fonema trabalhado na estrutura da
                palavra.{' '}
              </Text>
            </Flex>
            <Flex mt={4}>
              <Image
                src={resourcesPygus}
                objectFit="contain"
                alt="Pinguim pescando"
              />
            </Flex>

            <Flex justifyContent="center" mt={16}>
              <iframe
                width="293"
                height="165"
                src="https://www.youtube.com/embed/vbtQdy2dO80?si=qGlFM38626EvdyJO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <MotionFlex
          id="app"
          w="100%"
          h="2048px"
          bgImage={backgroundApp}
          bgRepeat="no-repeat"
          bgSize="cover"
          mb={10}
          alignItems="flex-start"
          ref={ref}
          position="relative"
          style={{
            backgroundPosition: `center ${parallaxOffset * 0.5}px`,
          }}
        > 
          {/* Floating decorative elements */}
          <MotionBox
            position="absolute"
            top="20%"
            right="10%"
            width="80px"
            height="80px"
            borderRadius="50%"
            background="linear-gradient(135deg, #F47327, #FFB366)"
            opacity={0.4}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <MotionBox
            position="absolute"
            top="70%"
            left="15%"
            width="120px"
            height="120px"
            borderRadius="20px"
            background="linear-gradient(45deg, #AFD6F1, #CCE5F6)"
            opacity={0.3}
            animate={{
              rotate: [0, 45, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Flex width="100%" flexDir="column" position="relative">
            <MotionFlex 
              justifyContent="flex-end" 
              mt={24} 
              px={16}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <MotionBox>
                <MotionText
                  fontFamily="Poppins"
                  fontSize="3xl"
                  textAlign="right"
                  maxW="1000px"
                  color="#52525B"
                  fontWeight="300"
                  lineHeight="1.6"
                  mb={2}
                >
                  O Pygus é um recurso com
                </MotionText>
                <MotionText
                  display="block"
                  fontSize="4xl"
                  color="#F47327"
                  fontWeight="500"
                  textAlign="right"
                  maxW="1000px"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{
                    background: 'linear-gradient(135deg, #F47327, #FF6B35)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  mb={2}
                >
                  pistas auditivas e visuais
                </MotionText>
                <MotionText
                  fontFamily="Poppins"
                  fontSize="3xl"
                  textAlign="right"
                  maxW="1000px"
                  color="#52525B"
                  fontWeight="300"
                  lineHeight="1.6"
                >
                  que propicia a percepção do fonema trabalhado na estrutura da palavra.
                </MotionText>
              </MotionBox>
            </MotionFlex>
            
            <MotionImage 
              src={resourcesPygus} 
              objectFit="contain" 
              alt="Pinguim pescando"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              style={{
                transform: `translateY(${parallaxOffset * -0.3}px)`,
              }}
            />
            
          <Flex>
            <MotionFlex 
              justifyContent="center" 
              mt={24} 
              position="absolute" 
              bottom={0} 
              left={0} 
              right={0}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <MotionBox
                borderRadius="20px"
                overflow="hidden"
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.2)"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  width="910"
                  height="511"
                  src="https://www.youtube.com/embed/vbtQdy2dO80?si=qGlFM38626EvdyJO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ borderRadius: '20px' }}
                ></iframe>
              </MotionBox>
            </MotionFlex>
          </Flex>
          </Flex>
        </MotionFlex>
      )}
    </>
  )
}
