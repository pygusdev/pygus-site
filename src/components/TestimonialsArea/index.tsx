import { Box, Container, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react'
import depoimento1 from '../../assets/depoimento1.jpeg'
import depoimento2 from '../../assets/depoimento2.jpeg'

const Testimonial = ({ children }: { children: React.ReactNode }) => {
    return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            {children}
        </Stack>
    )
}

const TestimonialHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    )
}

const TestimonialText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}
        >
            {children}
        </Text>
    )
}

const TestimonialAvatar = ({
    src,
    name,
    title,
}: {
    src: string
    name: string
    title: string
}) => {
    return (
        <Stack align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Stack>
    )
}

export const TestimonialsArea = () => {
    return (
        <Box bg={useColorModeValue('gray.50', 'gray.700')} py={20}>
            <Container maxW={'7xl'}>
                <Stack spacing={0} align={'center'} mb={16}>
                    <Heading color="brand.teal">O que dizem sobre nós</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Depoimentos de quem já transformou vidas com o Pygus
                    </Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Grande ajuda no tratamento</TestimonialHeading>
                            <TestimonialText>
                                "Equipe Pygus, só gratidão! O aplicativo está sendo de grande ajuda na evolução do tratamento. Minha filha ama brincar e se desenvolver."
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={depoimento1}
                            name={'Mayara dos Santos'}
                            title={'Mãe de Marília Isabelle (7 anos)'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Minha filha adora!</TestimonialHeading>
                            <TestimonialText>
                                "Minha filha ama aprender com o Pygus! Tem ajudado bastante no tratamento dela."
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={depoimento2}
                            name={'Flavia Pereira'}
                            title={'Mãe de Flávia Mariza (5 anos)'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}
