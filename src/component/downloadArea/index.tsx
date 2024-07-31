import {
  Box,
  Text,
  Image,
  Button,
  Stack,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'
import cellPhoneImage from '../../assets/imagecelulares.svg'

export const DownloadArea: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

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
                src={cellPhoneImage}
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
                href="https://apps.apple.com/br/app/pygus-profissional/id123456789"
                target="_blank"
                p={3}
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
                p={3}
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
        <Flex id="home" pl={20} pt={20} w="100%" justifyContent="space-between">
          <Box textAlign="left" mr={8}>
            <Text fontSize="184px" color="#F47327">
              PYGUS
            </Text>
            <Text fontWeight="light" fontSize="32px" color="#52525B">
              Desenvolvido para transformar a fala de crianças com transtorno
              dos sons da fala.
            </Text>
            <Stack direction="row" spacing={6} align="center" mt={14}>
              <Button
                variant="outline"
                as="a"
                href="https://apps.apple.com/br/app/pygus-profissional/id123456789"
                target="_blank"
                p={6}
              >
                <Image src={appleStoreSvg} mr={4} alt="Logo apple" />
                <Box>
                  <Text fontSize="xs">Download na</Text>
                  <Text fontWeight="medium" fontSize="md">
                    App Store
                  </Text>
                </Box>
              </Button>
              <Button
                variant="outline"
                as="a"
                href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                target="_blank"
                p={6}
              >
                <Image src={googlePlaySvg} mr={4} alt="Logo android" />
                <Box>
                  <Text fontSize="xs">Download na</Text>
                  <Text fontWeight="medium" fontSize="md">
                    Google Play
                  </Text>
                </Box>
              </Button>
            </Stack>
          </Box>
          <Flex
            justifyContent="flex-end"
            w="100%"
            style={{
              background:
                'radial-gradient(75.96% 66.21% at 93.03% 14.84%, #AFD6F1 12.21%, #FEFFFF 100%)',
            }}
          >
            <Image
              src={cellPhoneImage}
              alt="Imagem com 3 celulares"
              boxSize="auto"
              ml={8}
              pr={20}
            />
          </Flex>
        </Flex>
      )}
    </>
  )
}
