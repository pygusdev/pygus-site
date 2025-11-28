import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from '@chakra-ui/react'
import { Reveal } from '../Reveal'

export const FaqArea = () => {
  const faqData = [
    {
      title: 'Como criar e vincular um paciente?',
      description:
        'No app do profissional, existe uma seção específica para cadastrar um paciente. Após o cadastro, o vínculo entre profissional e paciente é feito automaticamente.',
    },
    {
      title: 'Como posso assinar um plano?',
      description:
        'Você pode assinar qualquer plano diretamente pelo nosso aplicativo. Se tiver dúvidas, entre em contato com a nossa equipe pelo whatsApp ou e-mail de suporte.',
    },
    {
      title: 'Consigo cadastrar mais de 5 pacientes (Básico) ou 15 pacientes (Pro)?',
      description:
        'É possível criar quantos perfis de pacientes desejar, mas somente até 5 (plano Básico) ou 15 (plano Pró) poderão estar ativos simultaneamente.',
    },
    {
      title: 'Posso usar o aplicativo com qualquer paciente?',
      description:
        'Sim. Embora o Pygus seja especialmente desenvolvido para pacientes com dificuldades na fala, você pode utilizá-lo com qualquer paciente que precise de exercícios e acompanhamento fonético.',
    },
    {
      title: 'Como funciona o aplicativo?',
      description:
        'Após cadastrar um paciente, o profissional pode liberar fonemas para prática, e acompanhar o progresso em tempo real por fonema. Tudo de forma simples e intuitiva.',
    },
  ]

  return (
    <Box py={20} pb={40} id="faq" bg="gray.50">
      <Container maxW="container.lg">
        <Reveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading fontSize={'3xl'} color="gray.700">
              Dúvidas <Text as="span" color="brand.orange">Frequentes</Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
              Tudo o que você precisa saber sobre o Pygus.
            </Text>
          </VStack>
        </Reveal>

        <Reveal delay={0.2}>
          <Accordion allowToggle allowMultiple>
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                border="none"
                mb={4}
                bg="white"
                rounded="xl"
                shadow="sm"
                _hover={{ shadow: 'md' }}
                transition="all 0.2s"
              >
                <h2>
                  <AccordionButton
                    py={6}
                    px={8}
                    _hover={{ bg: 'gray.50' }}
                    _expanded={{ bg: 'orange.50', color: 'brand.orange' }}
                    rounded="xl"
                  >
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="medium" fontSize="lg" color="inherit">
                        {item.title}
                      </Text>
                    </Box>
                    <AccordionIcon color="brand.orange" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={8} px={8} color="gray.600" lineHeight="tall">
                  {item.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Box>
  )
}
