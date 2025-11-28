import {
    Box,
    Flex,
    Image,
    Link,
    Button,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    VStack,
    HStack,
    Container,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import LogoImg from '../../assets/logoImg.svg'
import appleStoreSvg from '../../assets/apple-logo.svg'
import googlePlaySvg from '../../assets/playstore.svg'

const MotionBox = motion(Box)

export const ModernHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const links = [
        { name: 'Início', href: '#home' },
        { name: 'App', href: '#app' },
        { name: 'Preços', href: '#precos' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contato', href: '#contato' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            if (window.scrollY < 100) {
                setActiveLink('#home')
                return
            }

            // Check if at bottom of page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveLink('#contato')
                return
            }

            // Scroll spy logic
            const sections = links.map(link => document.querySelector(link.href))

            let current = ''
            sections.forEach(section => {
                if (section) {
                    const sectionTop = (section as HTMLElement).offsetTop
                    const sectionHeight = (section as HTMLElement).clientHeight
                    if (window.scrollY >= (sectionTop - 150) && window.scrollY < (sectionTop + sectionHeight - 150)) {
                        current = `#${section.id}`
                    }
                }
            })
            if (current) setActiveLink(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveLink(href)
            onClose()
        }
    }

    const navBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
    const activeColor = 'brand.orange'
    const inactiveColor = 'gray.600'

    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            transition="all 0.3s"
            bg={isScrolled ? navBg : 'transparent'}
            backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
            boxShadow={isScrolled ? 'sm' : 'none'}
            py={4}
        >
            <Container maxW="container.xl">
                <Flex align="center" justify="space-between">
                    {/* Logo */}
                    <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
                        <Image src={LogoImg} alt="Pygus Logo" h="40px" />
                    </Link>

                    {/* Desktop Nav */}
                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                fontWeight={activeLink === link.href ? '600' : '500'}
                                color={activeLink === link.href ? activeColor : inactiveColor}
                                fontSize="md"
                                _hover={{ color: activeColor, textDecoration: 'none' }}
                                position="relative"
                            >
                                {link.name}
                                {activeLink === link.href && (
                                    <MotionBox
                                        layoutId="underline"
                                        position="absolute"
                                        bottom="-2px"
                                        left="0"
                                        right="0"
                                        height="2px"
                                        bg={activeColor}
                                        borderRadius="full"
                                    />
                                )}
                            </Link>
                        ))}
                        <Menu>
                            <MenuButton
                                as={Button}
                                variant="solid"
                                size="sm"
                                px={6}
                                rightIcon={<ChevronDown size={16} />}
                            >
                                Baixar App
                            </MenuButton>
                            <MenuList zIndex={1001}>
                                <MenuItem
                                    as="a"
                                    href="https://apps.apple.com/br/app/pygus-profissional/id6514278911"
                                    target="_blank"
                                    _hover={{ bg: 'gray.100' }}
                                >
                                    <Image src={appleStoreSvg} w={5} h={5} mr={3} alt="Apple Logo" />
                                    <Box>
                                        <Text fontSize="xs" fontWeight="medium" color="gray.600">Download na</Text>
                                        <Text fontSize="sm" fontWeight="semibold">App Store</Text>
                                    </Box>
                                </MenuItem>
                                <MenuItem
                                    as="a"
                                    href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                                    target="_blank"
                                    _hover={{ bg: 'gray.100' }}
                                >
                                    <Image src={googlePlaySvg} w={5} h={5} mr={3} alt="Google Play Logo" />
                                    <Box>
                                        <Text fontSize="xs" fontWeight="medium" color="gray.600">Disponível no</Text>
                                        <Text fontSize="sm" fontWeight="semibold">Google Play</Text>
                                    </Box>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>

                    {/* Mobile Menu Button */}
                    <Button
                        display={{ base: 'flex', md: 'none' }}
                        variant="ghost"
                        onClick={onOpen}
                        aria-label="Open menu"
                    >
                        <MenuIcon size={24} />
                    </Button>
                </Flex>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        <Flex justify="space-between" align="center">
                            <Image src={LogoImg} alt="Pygus Logo" h="32px" />
                            <Button variant="ghost" onClick={onClose} size="sm">
                                <X size={24} />
                            </Button>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={6} mt={8} align="stretch">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    fontSize="lg"
                                    fontWeight="500"
                                    color={activeLink === link.href ? activeColor : 'gray.800'}
                                    _hover={{ textDecoration: 'none', color: activeColor }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Box w="full">
                                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mb={3}>
                                    Baixar App
                                </Text>
                                <VStack spacing={3} align="stretch">
                                    <Button
                                        as="a"
                                        href="https://apps.apple.com/br/app/pygus-profissional/id6514278911"
                                        target="_blank"
                                        variant="outline"
                                        onClick={onClose}
                                        justifyContent="flex-start"
                                        h="auto"
                                        py={3}
                                    >
                                        <Image src={appleStoreSvg} w={5} h={5} mr={3} alt="Apple Logo" />
                                        <Box textAlign="left">
                                            <Text fontSize="xs" fontWeight="medium" color="gray.600">Download na</Text>
                                            <Text fontSize="sm" fontWeight="semibold">App Store</Text>
                                        </Box>
                                    </Button>
                                    <Button
                                        as="a"
                                        href="https://play.google.com/store/apps/details?id=com.pygus.profissional"
                                        target="_blank"
                                        variant="outline"
                                        onClick={onClose}
                                        justifyContent="flex-start"
                                        h="auto"
                                        py={3}
                                    >
                                        <Image src={googlePlaySvg} w={5} h={5} mr={3} alt="Google Play Logo" />
                                        <Box textAlign="left">
                                            <Text fontSize="xs" fontWeight="medium" color="gray.600">Disponível no</Text>
                                            <Text fontSize="sm" fontWeight="semibold">Google Play</Text>
                                        </Box>
                                    </Button>
                                </VStack>
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
