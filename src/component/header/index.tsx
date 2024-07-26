import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import LogoImg from '../../assets/logoImg.svg'
import { useState } from 'react'

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('/')

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
  ) => {
    event.preventDefault()
    setActiveLink(path)
    window.history.pushState({}, '', path) // Atualiza a URL sem recarregar a página
  }

  return (
    <Flex
      align="center"
      px={20}
      py={6}
      bgGradient="linear(to-r, white, white, #DFEFF9, #B9DCF3)"
    >
      <ChakraLink href="/" onClick={(event) => handleLinkClick(event, '/')}>
        <Image src={LogoImg} alt="Logo" />
      </ChakraLink>

      <Flex gap={8} ml={16}>
        <ChakraLink
          href="/"
          fontSize="xl"
          fontWeight={activeLink === '/' ? '500' : '400'}
          color={activeLink === '/' ? '#F47327' : '#27272A'}
          onClick={(event) => handleLinkClick(event, '/')}
          _hover={{ textDecoration: 'none' }}
        >
          Início
        </ChakraLink>

        <ChakraLink
          href="/app"
          fontSize="xl"
          fontWeight={activeLink === '/app' ? '500' : '400'}
          color={activeLink === '/app' ? '#F47327' : '#27272A'}
          onClick={(event) => handleLinkClick(event, '/app')}
          _hover={{ textDecoration: 'none' }}
        >
          App
        </ChakraLink>
        <ChakraLink
          href="/precos"
          fontSize="xl"
          fontWeight={activeLink === '/precos' ? '500' : '400'}
          color={activeLink === '/precos' ? '#F47327' : '#27272A'}
          onClick={(event) => handleLinkClick(event, '/precos')}
          _hover={{ textDecoration: 'none' }}
        >
          Preços
        </ChakraLink>
        <ChakraLink
          href="/contato"
          fontSize="xl"
          fontWeight={activeLink === '/contato' ? '500' : '400'}
          color={activeLink === '/contato' ? '#F47327' : '#27272A'}
          onClick={(event) => handleLinkClick(event, '/contato')}
          _hover={{ textDecoration: 'none' }}
        >
          Contato
        </ChakraLink>
        <ChakraLink
          href="/faq"
          fontSize="xl"
          fontWeight={activeLink === '/faq' ? '500' : '400'}
          color={activeLink === '/faq' ? '#F47327' : '#27272A'}
          onClick={(event) => handleLinkClick(event, '/faq')}
          _hover={{ textDecoration: 'none' }}
        >
          FAQ
        </ChakraLink>
      </Flex>
    </Flex>
  )
}
