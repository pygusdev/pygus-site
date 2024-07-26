import { Box, Text, Image, Button, Stack, Flex } from '@chakra-ui/react'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'
import cellPhoneImage from '../../assets/imagecelulares.svg'

export const DownloadArea: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      px={20}
      py={24}
      bgGradient="linear(to-r, white, white, #DFEFF9, #B9DCF3)"
    >
      <Box textAlign="left" mr={8}>
        <Text fontSize="184px" mb={6} color="#F47327">
          PYGUS
        </Text>
        <Text fontWeight="light" fontSize="32px" color="#52525B" mb={14}>
          Desenvolvido para transformar a fala de crianças com transtorno dos
          sons da fala.
        </Text>
        <Stack direction="row" spacing={6} align="center">
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
      <Image
        src={cellPhoneImage}
        alt="Imagem com 3 celulares"
        boxSize="auto"
        ml={8}
        mt={4}
      />
    </Flex>
  )
}
