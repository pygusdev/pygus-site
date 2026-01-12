import { Box, Button, Container, Flex, Heading, List, ListItem, ListIcon, Stack, Text, useColorModeValue, Badge, Switch, HStack } from '@chakra-ui/react'
import { Check } from 'lucide-react'
import { Reveal } from '../Reveal'
import { useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/br/app/pygus-profissional/id6514278911'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.pygus.profissional'

const handleDownloadClick = () => {
  const userAgent = navigator.userAgent || navigator.vendor

  // Detecta iOS
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.open(APP_STORE_URL, '_blank')
    return
  }

  // Detecta Android
  if (/android/i.test(userAgent)) {
    window.open(PLAY_STORE_URL, '_blank')
    return
  }

  // Desktop ou outros - abre Play Store como padrão (Android é mais comum)
  window.open(PLAY_STORE_URL, '_blank')
}

interface PlanData {
  title: string
  price: string
  features: string[]
  recommended?: boolean
  discount?: string
}

interface PlanProps extends PlanData {
  period: string
}

const Plan = ({ title, price, period, features, recommended = false, discount }: PlanProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = recommended ? 'brand.orange' : 'gray.200'
  const shadow = recommended ? 'xl' : 'md'

  return (
    <Box
      bg={bg}
      border="2px solid"
      borderColor={borderColor}
      rounded="xl"
      shadow={shadow}
      p={8}
      position="relative"
      zIndex={recommended ? 1 : 0}
      display="flex"
      flexDirection="column"
      h="full"
      minH="500px"
    >
      {recommended && (
        <Badge
          position="absolute"
          top="-4"
          left="50%"
          transform="translateX(-50%)"
          colorScheme="orange"
          variant="solid"
          rounded="full"
          px={4}
          py={1}
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Mais Popular
        </Badge>
      )}
      <Stack spacing={4} mb={8}>
        <HStack>
          <Text fontSize="xl" fontWeight="bold" color="gray.500">
            {title}
          </Text>
          {discount && (
            <Badge colorScheme="green" rounded="full" px={2} py={0.5} fontSize="xs">
              Economize {discount}
            </Badge>
          )}
        </HStack>
        <Flex align="baseline" wrap="nowrap">
          <Text fontSize="3xl" fontWeight="900" whiteSpace="nowrap">
            R$ {price}
          </Text>
          <Text fontSize="md" color="gray.500" ml={2} whiteSpace="nowrap">
            /{period}
          </Text>
        </Flex>
      </Stack>

      <List spacing={3} mb={8} flex="1">
        {features.map((feature, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <ListIcon as={Check} color="brand.teal" />
            <Text fontSize="sm" color="gray.600">{feature}</Text>
          </ListItem>
        ))}
      </List>

      <Button
        w="full"
        size="lg"
        bg={recommended ? 'brand.orange' : 'gray.100'}
        color={recommended ? 'white' : 'gray.800'}
        _hover={{
          bg: recommended ? 'orange.600' : 'gray.200',
        }}
        rounded="lg"
        onClick={handleDownloadClick}
      >
        Começar Agora
      </Button>
    </Box>
  )
}

export const PlansArea = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans: { monthly: PlanData[]; annual: PlanData[] } = {
    monthly: [
      {
        title: 'Gratuito',
        price: '0,00',
        features: [
          'Até 2 pacientes',
          '1 RFA por paciente',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
        ],
      },
      {
        title: 'Básico',
        price: '39,99',
        features: [
          'Até 5 pacientes',
          '3 RFAs por paciente',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
        ],
      },
      {
        title: 'Pro',
        price: '89,99',
        recommended: true,
        features: [
          'Até 15 pacientes',
          'RFA Ilimitado',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
          'Suporte prioritário',
        ],
      },
      {
        title: 'Premium',
        price: '179,90',
        features: [
          'Até 30 pacientes',
          'RFA Ilimitado',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
          'Suporte prioritário',
        ],
      },
    ],
    annual: [
      {
        title: 'Gratuito',
        price: '0,00',
        features: [
          'Até 2 pacientes',
          '1 RFA por paciente',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
        ],
      },
      {
        title: 'Básico',
        price: '399,90',
        discount: '17%',
        features: [
          'Até 5 pacientes',
          '3 RFAs por paciente',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
        ],
      },
      {
        title: 'Pro',
        price: '899,90',
        discount: '17%',
        recommended: true,
        features: [
          'Até 15 pacientes',
          'RFA Ilimitado',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
          'Suporte prioritário',
        ],
      },
      {
        title: 'Premium',
        price: '1.799,00',
        discount: '17%',
        features: [
          'Até 30 pacientes',
          'RFA Ilimitado',
          'Acesso ilimitado a fonemas',
          'Jogo da memória ilimitado',
          'Paciente teste incluído',
          'Suporte prioritário',
        ],
      },
    ],
  }

  const currentPlans = isAnnual ? plans.annual : plans.monthly
  const period = isAnnual ? 'ano' : 'mês'

  return (
    <Box py={24} id="precos" bg="white">
      <Container maxW="container.xl">
        <Reveal>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={8}>
            <Heading fontSize={'4xl'} color="gray.700">
              Planos flexíveis para <Text as="span" color="brand.orange">você</Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
              Escolha o plano ideal para sua necessidade e comece a transformar vidas hoje mesmo.
            </Text>
          </Stack>
        </Reveal>

        <Reveal delay={0.1}>
          <HStack justify="center" mb={12} spacing={4}>
            <Text fontWeight={!isAnnual ? 'bold' : 'normal'} color={!isAnnual ? 'gray.700' : 'gray.500'}>
              Mensal
            </Text>
            <Switch
              size="lg"
              colorScheme="orange"
              isChecked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <Text fontWeight={isAnnual ? 'bold' : 'normal'} color={isAnnual ? 'gray.700' : 'gray.500'}>
              Anual
            </Text>
          </HStack>
        </Reveal>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 10, lg: 4, xl: 6 }}
          align="stretch"
          justify="center"
          w="full"
        >
          {currentPlans.map((plan, index) => (
            <Reveal key={plan.title} delay={0.1 + index * 0.1} fullHeight flex="1" maxW={{ lg: '280px' }}>
              <Plan
                title={plan.title}
                price={plan.price}
                period={period}
                features={plan.features}
                recommended={plan.recommended}
                discount={plan.discount}
              />
            </Reveal>
          ))}
        </Flex>

        <Reveal delay={0.5}>
          <Text textAlign="center" mt={12} color="gray.500" fontSize="sm">
            *Atendimento comercial das 08h às 18 horas.
          </Text>
        </Reveal>
      </Container>
    </Box>
  )
}
