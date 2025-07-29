import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { AccordionFAQ } from '../accordionFAQ'

export const FaqArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

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
    <Flex
      flexDir={isMobile ? 'column' : 'row'}
      id="faq"
      alignItems="center"
      px={isMobile ? 4 : 12}
      mt="120px"
    >
      {isMobile ? (
        <Flex alignItems="center" w="100%" flexDir="column" textAlign="center">
          <Text
            fontWeight="300"
            fontSize={'lg'}
            fontFamily="Poppins"
            color="#52525B"
          >
            Tem alguma
          </Text>
          <Text
            fontWeight="500"
            fontSize={'2xl'}
            fontFamily="Poppins"
            color="#F47327"
            style={{
              background: 'linear-gradient(135deg, #F47327, #FF6B35)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            dúvida?
          </Text>
          <Text
            fontWeight="300"
            fontSize={'lg'}
            fontFamily="Poppins"
            color="#52525B"
          >
            Nós
          </Text>
          <Text
            fontWeight="500"
            fontSize={'2xl'}
            fontFamily="Poppins"
            color="#F47327"
            style={{
              background: 'linear-gradient(135deg, #F47327, #FF6B35)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            respondemos.
          </Text>
        </Flex>
      ) : (
        <Flex 
          flexDir="column" 
          w="30%" 
          justifyContent="flex-start"
        >
          <Box>
            <Text
              fontWeight="300"
              fontSize={'3xl'}
              fontFamily="Poppins"
              color="#52525B"
              lineHeight="1.2"
            >
              Tem alguma
            </Text>
            <Text
              fontWeight="500"
              fontSize={'4xl'}
              fontFamily="Poppins"
              color="#F47327"
              display="block"
            >
              dúvida?
            </Text>
            <Text
              fontWeight="300"
              fontSize={'3xl'}
              fontFamily="Poppins"
              color="#52525B"
              display="block"
            >
              Nós
            </Text>
            <Text
              fontWeight="500"
              fontSize={'4xl'}
              fontFamily="Poppins"
              color="#F47327"
              display="block"
            >
              respondemos.
            </Text>
          </Box>
        </Flex>
      )}

      <Box 
        w="100%" 
        gap={4} 
        mt={isMobile ? 8 : 0}
      >
        {faqData.map((item, index) => (
          <Box 
            key={index} 
            mb={4}
          >
            <AccordionFAQ title={item.title} description={item.description} />
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
