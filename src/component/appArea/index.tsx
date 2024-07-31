import { Text, Image, Flex, useBreakpointValue } from '@chakra-ui/react'
import backgroundApp from '../../assets/backgroundApp.svg'
import imageApp from '../../assets/ImagemApp.png'

export const AppArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      {isMobile ? (
        <Flex
          id="app"
          w="100%"
          h="700px"
          bgImage={backgroundApp}
          bgRepeat="no-repeat"
          bgSize="cover"
          mb={10}
          alignItems="flex-start"
        >
          <Flex width="100%" flexDir="column">
            <Flex justifyContent="flex-end" mt={24} px={16}>
              <Text
                fontFamily="Poppins"
                fontSize="sm"
                textAlign="right"
                maxW="1000px"
                color="#52525B"
                fontWeight="300"
              >
                O Pygus é um recurso com{' '}
                <Text
                  display="inline"
                  fontSize="lg"
                  color="#F47327"
                  fontWeight="500"
                >
                  pistas auditivas e visuais
                </Text>{' '}
                que propicia a percepção do fonema trabalhado na estrutura da
                palavra.{' '}
              </Text>
            </Flex>
            <Flex mt={4}>
              <Image
                src={imageApp}
                objectFit="contain"
                alt="Pinguim pescando"
              />
            </Flex>

            <Flex justifyContent="center" mt={16}>
              <iframe
                width="293"
                height="165"
                src="https://www.youtube.com/embed/vbtQdy2dO80?si=qGlFM38626EvdyJO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          id="app"
          w="100%"
          h="2048px"
          bgImage={backgroundApp}
          bgRepeat="no-repeat"
          bgSize="cover"
          mb={10}
          alignItems="flex-start"
        >
          <Flex width="100%" flexDir="column">
            <Flex justifyContent="flex-end" mt={24} px={16}>
              <Text
                fontFamily="Poppins"
                fontSize="3xl"
                textAlign="right"
                maxW="1000px"
                color="#52525B"
                fontWeight="300"
              >
                O Pygus é um recurso com{' '}
                <Text
                  display="inline"
                  fontSize="4xl"
                  color="#F47327"
                  fontWeight="500"
                >
                  pistas auditivas e visuais
                </Text>{' '}
                que propicia a percepção do fonema trabalhado na estrutura da
                palavra.{' '}
              </Text>
            </Flex>
            <Image src={imageApp} objectFit="contain" alt="Pinguim pescando" />

            <Flex justifyContent="center" mt={24}>
              <iframe
                width="910"
                height="511"
                src="https://www.youtube.com/embed/vbtQdy2dO80?si=qGlFM38626EvdyJO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  )
}
