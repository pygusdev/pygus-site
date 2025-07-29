import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AccordionFAQ } from '../accordionFAQ'
import { useInView } from '../../hooks/useParallax'

export const FaqArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [ref, isInView] = useInView(0.2)
  
  const MotionFlex = motion(Flex)
  const MotionBox = motion(Box)
  const MotionText = motion(Text)

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
    <MotionFlex
      flexDir={isMobile ? 'column' : 'row'}
      id="faq"
      alignItems="center"
      px={isMobile ? 4 : 12}
      mt="120px"
      ref={ref}
      position="relative"
    >
      {/* Background decorative elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="5%"
        width="120px"
        height="120px"
        borderRadius="50%"
        background="linear-gradient(135deg, #AFD6F1, #CCE5F6)"
        opacity={0.2}
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="10%"
        right="10%"
        width="80px"
        height="80px"
        borderRadius="20px"
        background="linear-gradient(45deg, #F47327, #FFB366)"
        opacity={0.15}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
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
        <MotionFlex 
          flexDir="column" 
          w="30%" 
          justifyContent="flex-start"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <MotionBox>
            <MotionText
              fontWeight="300"
              fontSize={'3xl'}
              fontFamily="Poppins"
              color="#52525B"
              lineHeight="1.2"
            >
              Tem alguma
            </MotionText>
            <MotionText
              fontWeight="500"
              fontSize={'4xl'}
              fontFamily="Poppins"
              color="#F47327"
              display="block"
              style={{
                background: 'linear-gradient(135deg, #F47327, #FF6B35)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              dúvida?
            </MotionText>
            <MotionText
              fontWeight="300"
              fontSize={'3xl'}
              fontFamily="Poppins"
              color="#52525B"
              display="block"
            >
              Nós
            </MotionText>
            <MotionText
              fontWeight="500"
              fontSize={'4xl'}
              fontFamily="Poppins"
              color="#F47327"
              display="block"
              style={{
                background: 'linear-gradient(135deg, #F47327, #FF6B35)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              respondemos.
            </MotionText>
          </MotionBox>
        </MotionFlex>
      )}

      <MotionBox 
        w="100%" 
        gap={4} 
        mt={isMobile ? 8 : 0}
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {faqData.map((item, index) => (
          <MotionBox 
            key={index} 
            mb={4}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6 + (index * 0.1),
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
          >
            <AccordionFAQ title={item.title} description={item.description} />
          </MotionBox>
        ))}
      </MotionBox>
    </MotionFlex>
  )
}
