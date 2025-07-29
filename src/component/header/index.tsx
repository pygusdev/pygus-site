import { 
  Box, 
  Flex, 
  Image, 
  Link as ChakraLink, 
  Text,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import LogoImg from '../../assets/logoImg.svg'

const MotionFlex = motion(Flex)

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setActiveLink(href)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    
    if (isMobile) {
      onClose()
    }
  }

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#app', label: 'O App' },
    { href: '#precos', label: 'Preços' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' }
  ]

  return (
    <>
      <MotionFlex
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
        py={4}
        transition="all 0.3s ease-in-out"
        animate={{
          backgroundColor: scrolled 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottom: scrolled 
            ? '1px solid rgba(244, 115, 39, 0.1)' 
            : '1px solid transparent',
          boxShadow: scrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
            : '0 0 0 rgba(0, 0, 0, 0)'
        }}
      >
        {/* Logo */}
        <ChakraLink
          href="#home"
          onClick={(event) => handleLinkClick(event, '#home')}
          _hover={{ transform: 'scale(1.05)' }}
          transition="transform 0.2s ease"
        >
          <Image 
            src={LogoImg} 
            alt="Pygus Logo" 
            h={{ base: 8, md: 10 }}
            filter={scrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(255,255,255,0.3))'}
            transition="filter 0.3s ease"
          />
        </ChakraLink>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Flex gap={8} align="center">
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                href={item.href}
                onClick={(event) => handleLinkClick(event, item.href)}
                fontSize="sm"
                fontWeight={activeLink === item.href ? '600' : '500'}
                color={activeLink === item.href ? '#F47327' : scrolled ? '#27272A' : '#FFFFFF'}
                _hover={{ 
                  color: '#F47327',
                  textDecoration: 'none',
                  transform: 'translateY(-1px)'
                }}
                transition="all 0.2s ease"
                position="relative"
                fontFamily="Poppins"
                textShadow={!scrolled ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#F47327',
                  transform: activeLink === item.href ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.2s ease',
                  transformOrigin: 'center'
                }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </Flex>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            aria-label="Menu"
            icon={<Menu size={20} />}
            variant="ghost"
            color={scrolled ? '#27272A' : '#FFFFFF'}
            _hover={{ bg: 'rgba(244, 115, 39, 0.1)' }}
            onClick={onOpen}
          />
        )}
      </MotionFlex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton color="#F47327" />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.100">
            <Image src={LogoImg} alt="Pygus Logo" h={8} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch" pt={6}>
              {navItems.map((item) => (
                <ChakraLink
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleLinkClick(event, item.href)}
                  fontSize="lg"
                  fontWeight={activeLink === item.href ? '600' : '500'}
                  color={activeLink === item.href ? '#F47327' : '#27272A'}
                  _hover={{ 
                    color: '#F47327',
                    textDecoration: 'none',
                    pl: 2
                  }}
                  transition="all 0.2s ease"
                  fontFamily="Poppins"
                  py={2}
                  borderLeft={activeLink === item.href ? '3px solid #F47327' : '3px solid transparent'}
                  pl={activeLink === item.href ? 4 : 3}
                >
                  {item.label}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
