import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { CardPlans } from '../cardPlans'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/snow.json'

export const PlansArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
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
        <Flex id="precos" flexDir="column" position="relative">
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
          <Flex justifyContent="center" gap={2} alignItems="center">
            <Text
              fontFamily="Poppins"
              fontSize="3xl"
              fontWeight="300"
              color="#52525B"
            >
              Escolha o seu
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="4xl"
              fontWeight="500"
              color="#F47327"
            >
              plano
            </Text>
          </Flex>
          <Flex gap={8} w="100%" justifyContent="center" mt={20}>
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
      )}
    </>
  )
}
