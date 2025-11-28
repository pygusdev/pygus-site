import { Box, Container, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react'
import { CheckCircle, BarChart3, Gamepad2, Users } from 'lucide-react'
import { Reveal } from '../Reveal'

interface FeatureProps {
    title: string
    text: string
    icon: React.ElementType
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack
            bg="white"
            p={8}
            rounded="xl"
            shadow="lg"
            border="1px solid"
            borderColor="gray.100"
            _hover={{ transform: 'translateY(-5px)', shadow: 'xl', borderColor: 'brand.orange' }}
            transition="all 0.3s"
            align="start"
            spacing={4}
            h="full"
        >
            <Flex
                w={12}
                h={12}
                align="center"
                justify="center"
                rounded="full"
                bg="orange.50"
                color="brand.orange"
            >
                <Icon as={icon} w={6} h={6} />
            </Flex>
            <Text fontWeight="bold" fontSize="xl" color="gray.800">
                {title}
            </Text>
            <Text color="gray.600" fontSize="md" lineHeight="tall">
                {text}
            </Text>
        </Stack>
    )
}

export const FeaturesArea = () => {
    return (
        <Box p={4} py={20} bg="gray.50" position="relative" overflow="hidden">
            {/* Background Decoration */}
            <Box
                position="absolute"
                top="-10%"
                right="-5%"
                w="500px"
                h="500px"
                bg="orange.100"
                filter="blur(100px)"
                opacity={0.4}
                zIndex={0}
                rounded="full"
            />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Reveal>
                    <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
                        <Heading fontSize={'3xl'} color="gray.700">
                            <Text as="span" color="brand.orange">Pygus Profissional:</Text> Gestão Clínica Completa
                        </Heading>
                        <Text color={'gray.500'} fontSize={'xl'}>
                            O centro de controle do fonoaudiólogo. Organize pacientes, acompanhe progressos e utilize ferramentas inteligentes.
                        </Text>
                    </Stack>
                </Reveal>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    <Reveal delay={0.1} fullHeight>
                        <Feature
                            icon={Users}
                            title="Gestão de Pacientes"
                            text="Cadastre pacientes, edite dados e acompanhe evoluções de forma simples e organizada."
                        />
                    </Reveal>
                    <Reveal delay={0.2} fullHeight>
                        <Feature
                            icon={BarChart3}
                            title="RFA Inteligente (Beta)"
                            text="Avaliação automática baseada em 34 palavras. Identifique acertos, omissões e substituições com IA."
                        />
                    </Reveal>
                    <Reveal delay={0.3} fullHeight>
                        <Feature
                            icon={Gamepad2}
                            title="Liberação de Fonemas"
                            text="Personalize o tratamento liberando apenas os fonemas que cada paciente precisa treinar."
                        />
                    </Reveal>
                    <Reveal delay={0.4} fullHeight>
                        <Feature
                            icon={CheckCircle}
                            title="Monitoramento Real"
                            text="Ouça os áudios gravados, veja o histórico de tentativas e monitore o comportamento fonético."
                        />
                    </Reveal>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
