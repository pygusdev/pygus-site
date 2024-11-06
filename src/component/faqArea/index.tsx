import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { AccordionFAQ } from '../accordionFAQ'

export const FaqArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const faqData = [
    {
      title: 'Como usuário será vinculado ao paciente?',
      description:
        'No aplicativo do profissional, será gerado um código QR exclusivo que pode ser facilmente compartilhado com os clientes. Ao escanear esse código com o aplicativo do cliente, o vínculo entre o cliente e o profissional será estabelecido automaticamente, proporcionando uma conexão rápida e eficiente para acompanhamento e suporte contínuo.',
    },
    {
      title: 'Como posso assinar um plano?',
      description:
        'Atualmente, todos os nossos planos estão disponíveis no nosso app, no entanto, qualquer dúvida, pode entrar em contato com nossa equipe.',
    },
    {
      title: 'Qual diferença entre o plano personalizado e os demais planos?',
      description:
        'O plano personalizado permite gerenciar mais de 20 usuários.',
    },
    {
      title: 'Posso usar o aplicativo com qualquer paciente?',
      description:
        'Sim, o aplicativo é especialmente desenvolvido para pacientes com dificuldades na fala.',
    },
    {
      title: 'Como funciona o aplicativo?',
      description:
        'O aplicativo é simples e intuitivo. Após o vínculo entre paciente e profissional, o profissional pode avaliar o paciente, liberar fonemas para prática e acompanhar o progresso de forma eficiente.',
    },
  ]

  return (
    <Flex
      flexDir={isMobile ? 'column' : 'row'}
      id="faq"
      alignItems="center"
      px={isMobile ? 4 : 12}
      mt="120px"
    >
      {isMobile ? (
        <Flex alignItems="center" w="100%">
          <Text
            textAlign="center"
            fontWeight="300"
            fontSize={'lg'}
            fontFamily="Poppins"
            color="#52525B"
          >
            Tem alguma{' '}
            <Text
              fontWeight="500"
              fontSize={'2xl'}
              fontFamily="Poppins"
              color="#F47327"
              display="inline"
            >
              dúvida?
            </Text>{' '}
            Nós{' '}
            <Text
              fontWeight="500"
              fontSize={'2xl'}
              fontFamily="Poppins"
              color="#F47327"
              display="inline"
            >
              respondemos.
            </Text>
          </Text>
        </Flex>
      ) : (
        <Flex flexDir="column" w="30%" justifyContent="flex-start">
          <Text
            fontWeight="300"
            fontSize={'3xl'}
            fontFamily="Poppins"
            color="#52525B"
          >
            Tem alguma
            <Text
              fontWeight="500"
              fontSize={'4xl'}
              fontFamily="Poppins"
              color="#F47327"
            >
              dúvida?
            </Text>
            <Text
              fontWeight="300"
              fontSize={'3xl'}
              fontFamily="Poppins"
              color="#52525B"
            >
              Nós
            </Text>
            <Text
              fontWeight="500"
              fontSize={'4xl'}
              fontFamily="Poppins"
              color="#F47327"
            >
              respondemos.
            </Text>
          </Text>
        </Flex>
      )}

      <Box w="100%" gap={4} mt={isMobile ? 8 : 0}>
        {faqData.map((item, index) => (
          <Box key={index} mb={4}>
            <AccordionFAQ title={item.title} description={item.description} />
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
