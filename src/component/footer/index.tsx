import {
  Divider,
  Flex,
  Image,
  Text,
  Link,
  useBreakpointValue,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import preFooter from '../../assets/footerImage.png'
import logoImg from '../../assets/logoImgWhite.svg'

import instaImg from '../../assets/instagramImg.svg'
import linkedinImg from '../../assets/linkedinImage.svg'

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      {isMobile ? (
        <Flex id="contato" flexDir="column">
          <Flex>
            <Image
              src={preFooter}
              alt="Pinguim no gelo"
              objectFit="cover"
              w="100%"
            />
          </Flex>
          <Flex bgColor="#379598" height="550px" flexDir="column">
            <Flex flex={2} gap={2} flexDir="column">
              <Flex flexDir="column" px={4} mt={4}>
                <Flex alignItems="flex-start">
                  <Image src={logoImg} alt="Logo pygus" />
                </Flex>
                <Flex mt={4}>
                  <Text
                    fontSize="sm"
                    color="white"
                    fontWeight="400"
                    fontFamily="Poppins"
                  >
                    CNPJ: 47.932.823/0001-19
                  </Text>
                </Flex>
              </Flex>

              <Flex px={4} mt={4} flexDir="column">
                <Text
                  fontSize="md"
                  color="white"
                  fontWeight="500"
                  fontFamily="Poppins"
                >
                  Empresa
                </Text>
                <Flex flexDir="column" mt={4} gap={4}>
                  <Link href="#faq" _hover={{ textDecoration: 'none' }}>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      FAQ
                    </Text>
                  </Link>
                  <Link href="#precos" _hover={{ textDecoration: 'none' }}>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      Preços
                    </Text>
                  </Link>
                  <Link
                    _hover={{ textDecoration: 'none' }}
                    href="https://pygusdev.github.io/docs/policy-professional"
                    isExternal
                  >
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      Politica de privacidade Profissional
                    </Text>
                  </Link>
                  <Link
                    href="https://pygusdev.github.io/docs/"
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      Politica de privacidade Cliente
                    </Text>
                  </Link>
                </Flex>
              </Flex>
              <Flex justifyContent="space-between">
                <Flex alignItems="flex-start" px={4} mt={4} flexDir="column">
                  <Text
                    fontSize="md"
                    color="white"
                    fontWeight="500"
                    fontFamily="Poppins"
                  >
                    Contato
                  </Text>
                  <Flex flexDir="column" mt={4} gap={4}>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      suporte@pygus.com.br
                    </Text>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      + 55 (82) 98851-8859
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems="flex-start" px={4} mt={4} flexDir="column">
                  <Text
                    fontSize="md"
                    color="white"
                    fontWeight="500"
                    fontFamily="Poppins"
                  >
                    Social
                  </Text>
                  <Flex gap="5" mt={4}>
                    <Link
                      isExternal
                      href="https://www.instagram.com/pygus_app?igsh=NzIyd25zczZ3dGQ4&utm_source=qr"
                    >
                      <Image src={instaImg} alt="Instagram" />
                    </Link>
                    <Link
                      isExternal
                      href="https://www.linkedin.com/in/pygus-app-441750317/"
                    >
                      <Image src={linkedinImg} alt="Linkedin" />
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex alignItems="flex-start" mb={4} px={4} flexDir="column">
              <Divider colorScheme="teal" />
              <Flex mt={4}>
                <Text color="white" fontFamily="Poppins" fontSize="xs">
                  ® 2025. PYGUS LTDA. Todos os direitos reservados.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex id="contato" flexDir="column">
          <Flex>
            <Image
              src={preFooter}
              alt="Pinguim no gelo"
              objectFit="cover"
              w="100%"
            />
          </Flex>
          <Flex bgColor="#379598" height="550px" flexDir="column">
            <Grid templateColumns="2fr 1fr 1fr 1fr" gap={8} px={20} py={14}>
              <GridItem>
                <Flex flexDir="column">
                  <Flex alignItems="flex-start">
                    <Image src={logoImg} alt="Logo pygus" />
                  </Flex>
                  <Flex mt={6}>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      CNPJ: 47.932.823/0001-19
                    </Text>
                  </Flex>
                </Flex>
              </GridItem>
              
              <GridItem>
                <Flex alignItems="flex-start" flexDir="column">
                  <Text
                    fontSize="lg"
                    color="white"
                    fontWeight="500"
                    fontFamily="Poppins"
                  >
                    Empresa
                  </Text>
                  <Flex flexDir="column" mt={4} gap={4}>
                    <Link href="#faq" _hover={{ textDecoration: 'none' }}>
                      <Text
                        fontSize="sm"
                        color="white"
                        fontWeight="400"
                        fontFamily="Poppins"
                      >
                        FAQ
                      </Text>
                    </Link>
                    <Link href="#precos" _hover={{ textDecoration: 'none' }}>
                      <Text
                        fontSize="sm"
                        color="white"
                        fontWeight="400"
                        fontFamily="Poppins"
                      >
                        Preços
                      </Text>
                    </Link>
                    <Link
                      _hover={{ textDecoration: 'none' }}
                      href="https://pygusdev.github.io/docs/policy-professional"
                      isExternal
                    >
                      <Text
                        fontSize="sm"
                        color="white"
                        fontWeight="400"
                        fontFamily="Poppins"
                      >
                        Politica de privacidade Profissional
                      </Text>
                    </Link>
                    <Link
                      href="https://pygusdev.github.io/docs/"
                      _hover={{ textDecoration: 'none' }}
                      isExternal
                    >
                      <Text
                        fontSize="sm"
                        color="white"
                        fontWeight="400"
                        fontFamily="Poppins"
                      >
                        Politica de privacidade Cliente
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </GridItem>
              
              <GridItem>
                <Flex alignItems="flex-start" flexDir="column">
                  <Text
                    fontSize="lg"
                    color="white"
                    fontWeight="500"
                    fontFamily="Poppins"
                  >
                    Contato
                  </Text>
                  <Flex flexDir="column" mt={4} gap={4}>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      suporte@pygus.com.br
                    </Text>
                    <Text
                      fontSize="sm"
                      color="white"
                      fontWeight="400"
                      fontFamily="Poppins"
                    >
                      + 55 (82) 98851-8859
                    </Text>
                  </Flex>
                </Flex>
              </GridItem>
              
              <GridItem>
                <Flex alignItems="flex-start" flexDir="column">
                  <Text
                    fontSize="lg"
                    color="white"
                    fontWeight="500"
                    fontFamily="Poppins"
                  >
                    Social
                  </Text>
                  <Flex gap="5" mt={4}>
                    <Link
                      isExternal
                      href="https://www.instagram.com/pygus_app?igsh=NzIyd25zczZ3dGQ4&utm_source=qr"
                    >
                      <Image src={instaImg} alt="Instagram" />
                    </Link>
                    <Link
                      isExternal
                      href="https://www.linkedin.com/in/pygus-app-441750317/"
                    >
                      <Image src={linkedinImg} alt="Linkedin" />
                    </Link>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>

            <Flex alignItems="flex-start" mb={20} px={20} flexDir="column">
              <Divider colorScheme="teal" />
              <Flex mt={4}>
                <Text color="white" fontFamily="Poppins" fontSize="sm">
                  ® 2025. PYGUS LTDA. Todos os direitos reservados.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  )
}
