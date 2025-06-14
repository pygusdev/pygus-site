import { Flex, Image, Text } from '@chakra-ui/react'
import IconCheck from '../../assets/IconCheck.svg'
import { CardPlansProps } from './types'

export const CardPlans = ({
  typePlans,
  price,
  quantityUser,
  isMoreRecommended = false,
  isPersonalized = false,
}: CardPlansProps) => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        mb={-6}
        py={2}
        px={3}
        opacity={isMoreRecommended ? 1 : 0}
        bgColor="#6BBEC3"
        zIndex={400}
        borderRadius="lg"
      >
        <Text fontFamily="Poppins" fontWeight="600" color="white">
          Mais recomendado
        </Text>
      </Flex>

      <Flex
        flexDir="column"
        borderRadius="2xl"
        borderWidth={isMoreRecommended ? 3 : 1}
        borderColor={isMoreRecommended ? '#6BBEC3' : '#A1A1AA'}
        py={8}
        px={6}
      >
        <Flex
          py={3}
          px={4}
          alignSelf="flex-start"
          bgColor="#F4F4F5"
          borderRadius="lg"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontWeight="600"
            fontFamily="Poppins"
            fontSize="lg"
            color="#52525B"
          >
            {typePlans}
          </Text>
        </Flex>
        {isPersonalized ? (
          <Flex mt={6} gap={1} alignItems="center">
            <Text
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="2xl"
              color="#3F3F46"
            >
              Customizado
            </Text>
          </Flex>
        ) : (
          <Flex mt={6} gap={1} alignItems="center">
            <Text
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="2xl"
              color="#3F3F46"
            >
              R${' '}
              {price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text fontFamily="Poppins" fontSize="lg" color="#3F3F46">
              /mês
            </Text>
          </Flex>
        )}

        <Flex gap={3} alignItems="center" mt={8}>
          <Image src={IconCheck} alt="Icone de check" />
          <Text color="#52525B" fontSize="lg">
            {typePlans === 'Free'
              ? `Permite o cadastro de até 2 pacientes.`
              : `Permite o cadastro de até ${quantityUser} pacientes.`}
          </Text>
        </Flex>

        <Flex gap={3} alignItems="center" mt={8}>
          <Image src={IconCheck} alt="Icone de check" />
          <Text color="#52525B" fontSize="lg">
            Quantidade de fonemas ilimitada
          </Text>
        </Flex>

        <Flex gap={3} alignItems="center" mt={8}>
          <Image src={IconCheck} alt="Icone de check" />
          <Text color="#52525B" fontSize="lg">
            {typePlans === 'Free' || typePlans === 'Básico'
              ? 'Atendimento em horário comercial'
              : 'Suporte personalizado'}
          </Text>
        </Flex>

        
      </Flex>
    </Flex>
  )
}
