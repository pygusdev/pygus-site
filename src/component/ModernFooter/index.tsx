import { Box, Text, Container, VStack, HStack, Link, Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const MotionBox = motion(Box)

export const ModernFooter = () => {
  return (
    <Box
      background="linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
      color="white"
      py={16}
    >
      <Container maxW="1200px">
        <VStack spacing={12}>
          
          {/* Main Footer Content */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            w="100%"
          >
            <VStack spacing={8} textAlign="center">
              
              {/* Logo */}
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="900"
                background="linear-gradient(135deg, #F47327 0%, #FF6B35 100%)"
                backgroundClip="text"
                textFillColor="transparent"
              >
                PYGUS
              </Text>

              {/* Description */}
              <Text
                fontSize="lg"
                color="gray.300"
                maxW="600px"
                lineHeight="1.6"
              >
                Transformando a comunicação de crianças através da tecnologia e inovação. 
                Desenvolvido com amor para famílias que buscam o melhor para seus filhos.
              </Text>

              {/* Contact Info */}
              <VStack spacing={4} color="gray.400">
                <HStack spacing={3}>
                  <Mail size={18} />
                  <Text>contato@pygus.com</Text>
                </HStack>
                <HStack spacing={3}>
                  <Phone size={18} />
                  <Text>+55 (11) 99999-9999</Text>
                </HStack>
                <HStack spacing={3}>
                  <MapPin size={18} />
                  <Text>São Paulo, Brasil</Text>
                </HStack>
              </VStack>

            </VStack>
          </MotionBox>

          <Divider borderColor="gray.600" />

          {/* Bottom Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            w="100%"
          >
            <VStack spacing={4} textAlign="center">
              
              {/* Links */}
              <HStack spacing={8} flexWrap="wrap" justify="center">
                <Link 
                  href="#" 
                  color="gray.400" 
                  _hover={{ color: "white" }}
                  fontSize="sm"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  href="#" 
                  color="gray.400" 
                  _hover={{ color: "white" }}
                  fontSize="sm"
                >
                  Termos de Uso
                </Link>
                <Link 
                  href="#" 
                  color="gray.400" 
                  _hover={{ color: "white" }}
                  fontSize="sm"
                >
                  Suporte
                </Link>
                <Link 
                  href="#" 
                  color="gray.400" 
                  _hover={{ color: "white" }}
                  fontSize="sm"
                >
                  Blog
                </Link>
              </HStack>

              {/* Copyright */}
              <HStack spacing={2} fontSize="sm" color="gray.500">
                <Text>© 2024 Pygus. Feito com</Text>
                <Heart size={16} fill="currentColor" />
                <Text>para transformar vidas.</Text>
              </HStack>

            </VStack>
          </MotionBox>

        </VStack>
      </Container>
    </Box>
  )
}