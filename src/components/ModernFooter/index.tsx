import { Box, Text, Container, VStack, HStack, Link, Divider, SimpleGrid, Image, Icon } from '@chakra-ui/react'
import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, FileText } from 'lucide-react'
import LogoImg from '../../assets/logoImg.svg'

export const ModernFooter = () => {
    return (
        <Box
            as="footer"
            id="contato"
            bg="gray.50"
            pt={20}
            pb={10}
            position="relative"
            overflow="hidden"
            borderTop="4px solid"
            borderColor="brand.orange"
        >
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={12} mb={16}>

                    {/* Brand Column */}
                    <VStack align="start" spacing={6} gridColumn={{ md: 'span 2' }}>
                        <Image src={LogoImg} alt="Pygus Logo" h="50px" mb={2} />
                        <Text fontSize="md" color="gray.600" maxW="md" lineHeight="tall">
                            Transformando a comunicação de crianças através da tecnologia e inovação.
                            Desenvolvido com amor para famílias que buscam o melhor para seus filhos.
                        </Text>
                        <HStack spacing={4}>
                            <Link
                                href="https://www.instagram.com/pygus_app?igsh=NzIyd25zczZ3dGQ4&utm_source=qr"
                                isExternal
                                bg="white"
                                p={3}
                                borderRadius="full"
                                shadow="sm"
                                color="brand.orange"
                                border="1px solid"
                                borderColor="gray.100"
                                _hover={{ bg: 'brand.orange', color: 'white', transform: 'translateY(-2px)', shadow: 'md' }}
                                transition="all 0.2s"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/pygus-app-441750317/"
                                isExternal
                                bg="white"
                                p={3}
                                borderRadius="full"
                                shadow="sm"
                                color="brand.teal"
                                border="1px solid"
                                borderColor="gray.100"
                                _hover={{ bg: 'brand.teal', color: 'white', transform: 'translateY(-2px)', shadow: 'md' }}
                                transition="all 0.2s"
                            >
                                <Linkedin size={20} />
                            </Link>
                        </HStack>
                    </VStack>

                    {/* Links Column */}
                    <VStack align="start" spacing={6}>
                        <Text fontSize="lg" fontWeight="bold" color="gray.800">Empresa</Text>
                        <VStack align="start" spacing={3}>
                            <Link href="#faq" color="gray.600" _hover={{ color: 'brand.orange', transform: 'translateX(2px)' }} transition="all 0.2s">FAQ</Link>
                            <Link href="#precos" color="gray.600" _hover={{ color: 'brand.orange', transform: 'translateX(2px)' }} transition="all 0.2s">Preços</Link>
                            <Link
                                href="https://pygusdev.github.io/docs/"
                                isExternal
                                color="gray.600"
                                _hover={{ color: 'brand.orange', transform: 'translateX(2px)' }}
                                transition="all 0.2s"
                            >
                                Política de Privacidade
                            </Link>
                            <Link
                                href="https://pygusdev.github.io/docs/policy-professional"
                                isExternal
                                color="gray.600"
                                _hover={{ color: 'brand.orange', transform: 'translateX(2px)' }}
                                transition="all 0.2s"
                            >
                                Para Profissionais
                            </Link>
                        </VStack>
                    </VStack>

                    {/* Contact Column */}
                    <VStack align="start" spacing={6}>
                        <Text fontSize="lg" fontWeight="bold" color="gray.800">Contato</Text>
                        <VStack align="start" spacing={4}>
                            <HStack align="start">
                                <Icon as={Mail} boxSize={5} color="brand.orange" mt={1} />
                                <Text color="gray.600">suporte@pygus.com.br</Text>
                            </HStack>
                            <HStack align="start">
                                <Icon as={Phone} boxSize={5} color="brand.orange" mt={1} />
                                <Text color="gray.600">+55 (81) 99420-6939</Text>
                            </HStack>
                            <HStack align="start">
                                <Icon as={FileText} boxSize={5} color="brand.orange" mt={1} />
                                <Text color="gray.600">CNPJ: 47.932.823/0001-19</Text>
                            </HStack>
                        </VStack>
                    </VStack>

                </SimpleGrid>

                <Divider borderColor="gray.200" mb={8} />

                {/* Bottom Bar */}
                <VStack spacing={4}>
                    <HStack spacing={1} fontSize="sm" color="gray.500">
                        <Text>© 2025 Pygus. Feito com</Text>
                        <Icon as={Heart} boxSize={3.5} fill="#F47327" color="#F47327" />
                        <Text>para transformar vidas.</Text>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    )
}
