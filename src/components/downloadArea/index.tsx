import {
  Box,
  Text,
  Image,
  Button,
  Stack,
  Flex,
  Container,
  Heading,
} from '@chakra-ui/react'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'
import imageCell from '../../assets/imageCell.png'

export const DownloadArea: React.FC = () => {

  return (
    <Box
      id="home"
      bgGradient="linear(to-br, orange.50, white, teal.50)"
      pt={{ base: 32, md: 40 }}
      pb={{ base: 20, md: 32 }}
      overflow="hidden"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
        >
          {/* Text Content */}
          <Box flex="1" pr={{ md: 12 }} mb={{ base: 12, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
            <Heading
              as="h1"
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              fontWeight="900"
              lineHeight="0.9"
              mb={6}
            >
              <Text as="span" color="brand.orange">PYGUS</Text>
            </Heading>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color="gray.600"
              fontWeight="300"
              mb={10}
              maxW={{ base: '100%', md: 'lg' }}
            >
              Monitoramento confiável, treino divertido e ganhos mais rápidos na fala.
              A solução completa para fonoaudiólogos e pacientes.
            </Text>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Button
                as="a"
                href="https://apps.apple.com/br/app/pygus-profissional/id6514278911"
                target="_blank"
                size="lg"
                h={16}
                px={8}
                bg="white"
                color="gray.800"
                border="1px solid"
                borderColor="gray.200"
                _hover={{ bg: 'gray.50', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                rounded="xl"
                shadow="lg"
              >
                <Image src={appleStoreSvg} w={6} h={6} mr={3} alt="Apple Logo" />
                <Box textAlign="left">
                  <Text fontSize="xs" fontWeight="medium">Download na</Text>
                  <Text fontSize="lg" fontWeight="semibold" lineHeight="1">App Store</Text>
                </Box>
              </Button>

              <Button
                as="a"
                href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                target="_blank"
                size="lg"
                h={16}
                px={8}
                bg="white"
                color="gray.800"
                border="1px solid"
                borderColor="gray.200"
                _hover={{ bg: 'gray.50', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                rounded="xl"
                shadow="lg"
              >
                <Image src={googlePlaySvg} w={6} h={6} mr={3} alt="Google Play Logo" />
                <Box textAlign="left">
                  <Text fontSize="xs" fontWeight="medium">Disponível no</Text>
                  <Text fontSize="lg" fontWeight="semibold" lineHeight="1">Google Play</Text>
                </Box>
              </Button>
            </Stack>
          </Box>

          {/* Image Content */}
          <Box flex="1" position="relative">
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="120%"
              h="120%"
              bgGradient="radial(brand.orangeAlpha.200, transparent 70%)"
              zIndex={0}
            />
            <Image
              src={imageCell}
              alt="App Pygus em celulares"
              w="100%"
              maxW="600px"
              objectFit="contain"
              position="relative"
              zIndex={1}
              filter="drop-shadow(0px 20px 40px rgba(0,0,0,0.15))"
              animation="float 6s ease-in-out infinite"
              sx={{
                '@keyframes float': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-20px)' },
                  '100%': { transform: 'translateY(0px)' },
                }
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
