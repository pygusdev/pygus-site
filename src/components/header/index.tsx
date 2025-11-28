import {
  Flex,
  Image,
  Link as ChakraLink,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import LogoImg from '../../assets/logoImg.svg'
import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'

export const Header = () => {
  const [activeLink, setActiveLink] = useState('#home')
  const paddingHorizontal = useBreakpointValue({ base: 4, md: 20 })
  const paddingVertical = useBreakpointValue({ base: 2, md: 6 })
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
  ) => {
    event.preventDefault()
    setActiveLink(path)
    onClose()
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.history.pushState({}, '', path)
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        '#home, #precos, #app, #contato, #faq',
      )

      let currentLink = '#home'

      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop - 96
        const sectionHeight = section.offsetHeight
        const sectionBottom = sectionTop + sectionHeight

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentLink = `#${section.id}`
        }
      })

      setActiveLink(currentLink)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isMobile && (
        <Drawer
          isOpen={isOpen}
          placement="left"
          size="xs"
          onClose={onClose}
          finalFocusRef={btnRef.current}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Flex justifyContent="center" mt={4}>
                <Image src={LogoImg} alt="Logo" w={16} h={8} />
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <Flex gap={8} mt={8} flexDir="column">
                <ChakraLink
                  href="#home"
                  fontSize={16}
                  fontWeight={activeLink === '#home' ? '500' : '400'}
                  color={activeLink === '#home' ? '#F47327' : '#27272A'}
                  onClick={(event) => handleLinkClick(event, '#home')}
                  _hover={{ textDecoration: 'none' }}
                  fontFamily="Poppins"
                >
                  Início
                </ChakraLink>

                <ChakraLink
                  href="#app"
                  fontSize={16}
                  fontWeight={activeLink === '#app' ? '500' : '400'}
                  color={activeLink === '#app' ? '#F47327' : '#27272A'}
                  onClick={(event) => handleLinkClick(event, '#app')}
                  _hover={{ textDecoration: 'none' }}
                  fontFamily="Poppins"
                >
                  App
                </ChakraLink>
                <ChakraLink
                  href="#precos"
                  fontSize={16}
                  fontWeight={activeLink === '#precos' ? '500' : '400'}
                  color={activeLink === '#precos' ? '#F47327' : '#27272A'}
                  onClick={(event) => handleLinkClick(event, '#precos')}
                  _hover={{ textDecoration: 'none' }}
                  fontFamily="Poppins"
                >
                  Preços
                </ChakraLink>
                <ChakraLink
                  href="#faq"
                  fontSize={16}
                  fontWeight={activeLink === '#faq' ? '500' : '400'}
                  color={activeLink === '#faq' ? '#F47327' : '#27272A'}
                  onClick={(event) => handleLinkClick(event, '#faq')}
                  _hover={{ textDecoration: 'none' }}
                  fontFamily="Poppins"
                >
                  FAQ
                </ChakraLink>
                <ChakraLink
                  href="#contato"
                  fontSize={16}
                  fontWeight={activeLink === '#contato' ? '500' : '400'}
                  color={activeLink === '#contato' ? '#F47327' : '#27272A'}
                  onClick={(event) => handleLinkClick(event, '#contato')}
                  _hover={{ textDecoration: 'none' }}
                  fontFamily="Poppins"
                >
                  Contato
                </ChakraLink>
              </Flex>
            </DrawerBody>

            <DrawerFooter w="100%" justifyContent="center">
              <Flex as={Button} variant="none" onClick={onClose}>
                <Text color="#379598" fontSize="md">
                  Esconder menu
                </Text>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}

      {isMobile && (
        <Flex alignItems="center" gap={4}>
          <Flex mt={4} as={Button} onClick={onOpen} variant="none" ref={btnRef}>
            <Menu size={24} color="#71717A" />
          </Flex>
          <ChakraLink
            href="#home"
            onClick={(event) => handleLinkClick(event, '#home')}
          >
            <Image src={LogoImg} alt="Logo" />
          </ChakraLink>
        </Flex>
      )}

      {!isMobile && (
        <Flex
          align="center"
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
          w="100%"
          px={paddingHorizontal}
          py={paddingVertical}
          style={{
            background:
              'linear-gradient(89.86deg, #FFFFFF 53.54%, #F0F8FD 60.58%, #DEEEFA 69.56%, #CCE5F6 81%, #C1DFF4 86.66%, #B2D8F2 99.81%)',
          }}
        >
          <ChakraLink
            href="#home"
            onClick={(event) => handleLinkClick(event, '#home')}
          >
            <Image src={LogoImg} alt="Logo" />
          </ChakraLink>
          <Flex gap={8} ml={16}>
            <ChakraLink
              href="#home"
              fontSize="xl"
              fontWeight={activeLink === '#home' ? '500' : '400'}
              color={activeLink === '#home' ? '#F47327' : '#27272A'}
              onClick={(event) => handleLinkClick(event, '#home')}
              _hover={{ textDecoration: 'none' }}
              fontFamily="Poppins"
            >
              Início
            </ChakraLink>

            <ChakraLink
              href="#app"
              fontSize="xl"
              fontWeight={activeLink === '#app' ? '500' : '400'}
              color={activeLink === '#app' ? '#F47327' : '#27272A'}
              onClick={(event) => handleLinkClick(event, '#app')}
              _hover={{ textDecoration: 'none' }}
              fontFamily="Poppins"
            >
              App
            </ChakraLink>
            <ChakraLink
              href="#precos"
              fontSize="xl"
              fontWeight={activeLink === '#precos' ? '500' : '400'}
              color={activeLink === '#precos' ? '#F47327' : '#27272A'}
              onClick={(event) => handleLinkClick(event, '#precos')}
              _hover={{ textDecoration: 'none' }}
              fontFamily="Poppins"
            >
              Preços
            </ChakraLink>
            <ChakraLink
              href="#faq"
              fontSize="xl"
              fontWeight={activeLink === '#faq' ? '500' : '400'}
              color={activeLink === '#faq' ? '#F47327' : '#27272A'}
              onClick={(event) => handleLinkClick(event, '#faq')}
              _hover={{ textDecoration: 'none' }}
              fontFamily="Poppins"
            >
              FAQ
            </ChakraLink>
            <ChakraLink
              href="#contato"
              fontSize="xl"
              fontWeight={activeLink === '#contato' ? '500' : '400'}
              color={activeLink === '#contato' ? '#F47327' : '#27272A'}
              onClick={(event) => handleLinkClick(event, '#contato')}
              _hover={{ textDecoration: 'none' }}
              fontFamily="Poppins"
            >
              Contato
            </ChakraLink>
          </Flex>
        </Flex>
      )}
    </>
  )
}
