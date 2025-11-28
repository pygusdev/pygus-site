import { Box, Button, Container, Flex, Heading, List, ListItem, ListIcon, Stack, Text, useColorModeValue, Badge } from '@chakra-ui/react'
import { Check } from 'lucide-react'
import { Reveal } from '../Reveal'

interface PlanProps {
  title: string
  price: string
  features: string[]
  recommended?: boolean
}

const Plan = ({ title, price, features, recommended = false }: PlanProps) => {
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
        <Text fontSize="xl" fontWeight="bold" color="gray.500">
          {title}
        </Text>
        <Flex align="baseline">
          <Text fontSize="4xl" fontWeight="900">
            R$ {price}
          </Text>
          <Text fontSize="md" color="gray.500" ml={2}>
            /mês
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
      >
        Começar Agora
      </Button>
    </Box>
  )
}

export const PlansArea = () => {
  return (
    <Box py={24} id="precos" bg="white">
      <Container maxW="container.xl">
        <Reveal>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
            <Heading fontSize={'4xl'} color="gray.700">
              Planos flexíveis para <Text as="span" color="brand.orange">você</Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
              Escolha o plano ideal para sua necessidade e comece a transformar vidas hoje mesmo.
            </Text>
          </Stack>
        </Reveal>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 10, md: 4, lg: 10 }}
          align="stretch"
          justify="center"
          w="full"
        >
          <Reveal delay={0.1} fullHeight flex="1" maxW={{ md: '340px' }}>
            <Plan
              title="Gratuito"
              price="0,00"
              features={[
                'Até 2 pacientes',
                '1 RFA por paciente',
                'Acesso ilimitado a fonemas',
                'Jogo da memória ilimitado',
                'Paciente teste incluído',
              ]}
            />
          </Reveal>
          <Reveal delay={0.2} fullHeight flex="1" maxW={{ md: '340px' }}>
            <Plan
              title="Básico"
              price="39,99"
              recommended
              features={[
                'Até 5 pacientes',
                '3 RFAs por paciente',
                'Acesso ilimitado a fonemas',
                'Jogo da memória ilimitado',
                'Paciente teste incluído',
              ]}
            />
          </Reveal>
          <Reveal delay={0.3} fullHeight flex="1" maxW={{ md: '340px' }}>
            <Plan
              title="Pro"
              price="89,99"
              features={[
                'Até 15 pacientes',
                'RFA Ilimitado',
                'Acesso ilimitado a fonemas',
                'Jogo da memória ilimitado',
                'Paciente teste incluído',
                'Suporte prioritário',
              ]}
            />
          </Reveal>
        </Flex>

        <Reveal delay={0.4}>
          <Text textAlign="center" mt={12} color="gray.500" fontSize="sm">
            *Atendimento comercial das 08h às 18 horas.
          </Text>
        </Reveal>
      </Container>
    </Box>
  )
}
