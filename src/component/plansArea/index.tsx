import { Flex, Text } from '@chakra-ui/react'
import { CardPlans } from '../cardPlans'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/snow.json'

export const PlansArea = () => {
  const plansAreaData = [
    {
      type: 'Básico',
      price: 99,
      quantityUser: 5,
      isMoreRecommended: false,
      isPersonalized: false,
    },
    {
      type: 'Essencial',
      price: 152.9,
      quantityUser: 10,
      isMoreRecommended: true,
      isPersonalized: false,
    },
    {
      type: 'Pro',
      price: 199.9,
      quantityUser: 15,
      isMoreRecommended: false,
      isPersonalized: false,
    },
    {
      type: 'Premium',
      price: 259.9,
      quantityUser: 20,
      isMoreRecommended: false,
      isPersonalized: false,
    },
    {
      type: 'Personalizado',
      price: 0,
      quantityUser: 0,
      isMoreRecommended: false,
      isPersonalized: true,
    },
  ]
  return (
    <Flex flexDir="column" position="relative">
      <Lottie
        animationData={lottieJson}
        play
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Garante que a animação fique no fundo
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
              titleButton="Entrar em contato"
              isMoreRecommended={item.isMoreRecommended}
              onPressCard={() => console.log('entrar em contato')}
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
  )
}
