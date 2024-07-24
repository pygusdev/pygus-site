
import { Box, Flex, Link, Image } from '@chakra-ui/react';



export const Header = () => {

  return (
    <Box   p='24px' paddingLeft='80px'>
    <Flex align="center" >
      
      <Link href="/" _hover={{ textDecoration: 'none' }}>
        <Image src="/src/assets/logoImg.svg" alt="Logo" width="100px" height="48px" />
      </Link>
   
      <Box paddingLeft='64px'>
      <Flex gap='32px'>
        <Link href="/" fontSize="20px"  _hover={{ textDecoration: 'underline', color: '#F47327', fontWeight: '500' }}>
          Início
        </Link>
        <Link href="/app" fontSize="20px" _hover={{ textDecoration: 'underline', color: '#F47327', fontWeight: '500' }}>
          App
        </Link>
        <Link href="/precos" fontSize="20px" _hover={{ textDecoration: 'underline', color: '#F47327', fontWeight: '500' }}>
          Preços
        </Link>
        <Link href="/contato" fontSize="20px" _hover={{ textDecoration: 'underline', color: '#F47327', fontWeight: '500' }}>
          Contato
        </Link>
        <Link href="/faq" fontSize="20px" _hover={{ textDecoration: 'underline', color: '#F47327', fontWeight: '500' }}>
          FAQ
        </Link>
      </Flex>
      </Box>
    </Flex>
  </Box>

  );
};

