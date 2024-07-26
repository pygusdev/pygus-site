import { Box, Text, Image, Button, Stack, Flex } from '@chakra-ui/react'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'
import cellPhoneImage from '../../assets/imagecelulares.svg'

export const DownloadArea: React.FC = () => {
  return (
    <Flex pl={20}>
      <Box textAlign="left" mr={8}>
        <Text fontSize="184px" color="#F47327" fontFamily="Poppins">
          PYGUS
        </Text>
        <Text
          fontWeight="light"
          fontSize="32px"
          color="#52525B"
          fontFamily="Poppins"
        >
          Desenvolvido para transformar a fala de crianças com transtorno dos
          sons da fala.
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
              <Text fontWeight="medium" fontSize="md" fontFamily="Poppins">
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
              <Text fontWeight="medium" fontSize="md" fontFamily="Poppins">
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
  )
}
