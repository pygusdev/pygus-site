import { Flex, Text, useBreakpointValue, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CardPlans } from '../cardPlans'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/snow.json'
import { useInView } from '../../hooks/useParallax'

export const PlansArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [ref, isInView] = useInView(0.2)
  
  const MotionFlex = motion(Flex)
  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  const plansAreaData = [
    {
      type: 'Free',
      price: 0.0,
      quantityUser: 5,
      isMoreRecommended: false,
      isPersonalized: false,
    },

    {
      type: 'Básico',
      price: 39.99,
      quantityUser: 5,
      isMoreRecommended: false,
      isPersonalized: false,
    },

    {
      type: 'Pro',
      price: 89.99,
      quantityUser: 15,
      isMoreRecommended: true,
      isPersonalized: false,
    },
  ]



  return (
    <>
      {isMobile ? (
        <Flex id="precos" flexDir="column" position="relative">
          <Flex justifyContent="center" gap={2} alignItems="center">
            <Text
              fontFamily="Poppins"
              fontSize="lg"
              fontWeight="300"
              color="#52525B"
            >
              Escolha o seu
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="2xl"
              fontWeight="500"
              color="#F47327"
            >
              plano
            </Text>
          </Flex>
          <Flex flexDir="column" gap={4} w="100%" alignItems="center" mt={8}>
            {plansAreaData.map((item, index) => (
              <Flex key={index}>
                <CardPlans
                  typePlans={item.type}
                  price={item.price}
                  quantityUser={item.quantityUser}
                  isMoreRecommended={item.isMoreRecommended}
                  isPersonalized={item.isPersonalized}
                />
              </Flex>
            ))}
          </Flex>
          <Flex
            justifyContent="center"
            mt={4}
            fontSize="sm"
            fontFamily="Poppins"
            color="#52525B"
          >
            <Text>*Atendimento comercial das 08h às 18 horas.</Text>
          </Flex>
        </Flex>
      ) : (
        <MotionFlex 
          id="precos" 
          flexDir="column" 
          position="relative" 
          py={20}
          ref={ref}
        >
          <Lottie
            animationData={lottieJson}
            play
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
          
          {/* Background decorative elements */}
          <MotionBox
            position="absolute"
            top="10%"
            left="5%"
            width="150px"
            height="150px"
            borderRadius="50%"
            background="linear-gradient(135deg, #F47327, #FFB366)"
            opacity={0.1}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <MotionBox
            position="absolute"
            top="60%"
            right="8%"
            width="100px"
            height="100px"
            borderRadius="20px"
            background="linear-gradient(45deg, #AFD6F1, #CCE5F6)"
            opacity={0.2}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <MotionFlex 
            justifyContent="center" 
            gap={2} 
            alignItems="center"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <MotionText
              fontFamily="Poppins"
              fontSize="3xl"
              fontWeight="300"
              color="#52525B"
            >
              Escolha o seu
            </MotionText>
            <MotionText
              fontFamily="Poppins"
              fontSize="4xl"
              fontWeight="500"
              color="#F47327"
              style={{
                background: 'linear-gradient(135deg, #F47327, #FF6B35)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              plano
            </MotionText>
          </MotionFlex>
          
          <MotionFlex 
            gap={8} 
            w="100%" 
            justifyContent="center" 
            mt={20}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {plansAreaData.map((item, index) => (
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
                  delay: 0.5 + (index * 0.2),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <CardPlans
                  typePlans={item.type}
                  price={item.price}
                  quantityUser={item.quantityUser}
                  isMoreRecommended={item.isMoreRecommended}
                  isPersonalized={item.isPersonalized}
                />
              </MotionBox>
            ))}
          </MotionFlex>
          
          <MotionFlex
            justifyContent="center"
            mt={8}
            fontSize="sm"
            fontFamily="Poppins"
            color="#52525B"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Text>*Atendimento comercial das 08h às 18 horas.</Text>
          </MotionFlex>
        </MotionFlex>
      )}
    </>
  )
}
