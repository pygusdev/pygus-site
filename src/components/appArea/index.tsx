import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex, Image } from '@chakra-ui/react'
import { Mic, Music, Layers } from 'lucide-react'
import resourcesPygus from '../../assets/resourcesPygus.png'
import { Reveal } from '../Reveal'

export const AppArea = () => {
  return (
    <Box py={20} id="app" bg="white" overflow="hidden" position="relative">
      {/* Background Decoration */}
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="600px"
        h="600px"
        bg="teal.50"
        filter="blur(120px)"
        opacity={0.5}
        zIndex={0}
        rounded="full"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">

          {/* Left Content: Description */}
          <VStack align="start" spacing={8}>
            <Reveal>
              <Box>
                <Heading fontSize={{ base: '3xl', md: '4xl' }} mb={4} color="gray.700">
                  <Text as="span" color="brand.orange">Pygus Paciente:</Text> Terapia Divertida
                </Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="tall">
                  O app onde a mágica acontece. Desenhado para crianças realizarem treinos de fala de maneira natural, com reforço positivo e progressão clara.
                </Text>
              </Box>
            </Reveal>

            <SimpleGrid columns={1} spacing={6} w="full">
              <Reveal delay={0.2}>
                <Box p={6} bg="orange.50" rounded="xl" border="1px solid" borderColor="orange.100">
                  <Flex align="center" mb={3}>
                    <Icon as={Layers} color="brand.orange" w={6} h={6} mr={3} />
                    <Text fontWeight="bold" fontSize="lg" color="gray.800">Nível 1: Sem Fala</Text>
                  </Flex>
                  <Text color="gray.600">
                    Atividades visuais e motoras. Montagem de palavras com sílabas, ordenação e identificação, sem gravação de voz.
                  </Text>
                </Box>
              </Reveal>

              <Reveal delay={0.3}>
                <Box p={6} bg="teal.50" rounded="xl" border="1px solid" borderColor="teal.100">
                  <Flex align="center" mb={3}>
                    <Icon as={Mic} color="brand.teal" w={6} h={6} mr={3} />
                    <Text fontWeight="bold" fontSize="lg" color="gray.800">Nível 2: Palavras</Text>
                  </Flex>
                  <Text color="gray.600">
                    A criança ouve e repete. O app cronometra e dá feedback imediato sobre a pronúncia.
                  </Text>
                </Box>
              </Reveal>

              <Reveal delay={0.4}>
                <Box p={6} bg="blue.50" rounded="xl" border="1px solid" borderColor="blue.100">
                  <Flex align="center" mb={3}>
                    <Icon as={Music} color="blue.500" w={6} h={6} mr={3} />
                    <Text fontWeight="bold" fontSize="lg" color="gray.800">Nível 3: Frases</Text>
                  </Flex>
                  <Text color="gray.600">
                    Treino avançado com frases modelo. A criança grava sua fala e recebe retorno adaptado ao progresso.
                  </Text>
                </Box>
              </Reveal>
            </SimpleGrid>
          </VStack>

          {/* Right Content: Image */}
          <Reveal delay={0.5}>
            <Box position="relative" display="flex" justifyContent="center">
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="120%"
                h="120%"
                bgGradient="radial(brand.tealAlpha.200, transparent 70%)"
                zIndex={0}
              />
              <Image
                src={resourcesPygus}
                alt="Pygus Paciente App"
                maxW="100%"
                objectFit="contain"
                position="relative"
                zIndex={1}
                filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.1))"
              />
            </Box>
          </Reveal>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
