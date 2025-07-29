import { 
  Box, 
  Text, 
  Container, 
  VStack, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const MotionBox = motion(Box)

export const ModernFAQ = () => {
  const faqs = [
    {
      question: "Como o Pygus funciona?",
      answer: "O Pygus utiliza tecnologia avançada com pistas auditivas e visuais para ajudar crianças com transtorno dos sons da fala. Nosso app oferece exercícios interativos e acompanhamento em tempo real do progresso."
    },
    {
      question: "Para que idade o app é recomendado?",
      answer: "O Pygus é especialmente desenvolvido para crianças de 3 a 12 anos com dificuldades na fala, mas pode ser utilizado por qualquer criança que precise de exercícios e acompanhamento fonético."
    },
    {
      question: "Preciso ser um profissional para usar?",
      answer: "Não! O Pygus foi desenvolvido para ser usado tanto por profissionais quanto por pais e cuidadores. Oferecemos versões adaptadas para diferentes níveis de conhecimento."
    },
    {
      question: "O app funciona offline?",
      answer: "Sim, muitas funcionalidades do Pygus funcionam offline. Você pode baixar os exercícios e usar mesmo sem conexão com a internet, sincronizando o progresso quando voltar online."
    },
    {
      question: "Como acompanho o progresso da criança?",
      answer: "O app oferece relatórios detalhados e gráficos de progresso em tempo real. Você pode acompanhar a evolução por fonema, ver estatísticas de uso e receber insights personalizados."
    },
    {
      question: "Existe suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico completo através do chat no app, email e WhatsApp. Nossa equipe está disponível para ajudar com qualquer dúvida ou problema técnico."
    }
  ]

  return (
    <Box
      py={20}
      background="linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
      position="relative"
    >
      <Container maxW="900px">
        <VStack spacing={16}>
          
          {/* Section Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            textAlign="center"
          >
                          <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="800"
                background="linear-gradient(135deg, #F47327 0%, #FF6B35 100%)"
                backgroundClip="text"
                textFillColor="transparent"
                mb={4}
              >
                Perguntas Frequentes
              </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="600px"
              lineHeight="1.6"
            >
              Tire suas dúvidas sobre o Pygus e descubra como podemos ajudar
            </Text>
          </MotionBox>

          {/* FAQ Accordion */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            w="100%"
          >
            <Accordion allowMultiple>
              {faqs.map((faq, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  mb={4}
                >
                  <AccordionItem
                    border="none"
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                    _hover={{
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.3s ease"
                  >
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          p={6}
                          borderRadius="2xl"
                          _hover={{ bg: "transparent" }}
                          _focus={{ boxShadow: "none" }}
                        >
                          <Box flex="1" textAlign="left">
                            <Text
                              fontSize={{ base: "lg", md: "xl" }}
                              fontWeight="600"
                              color="gray.800"
                            >
                              {faq.question}
                            </Text>
                          </Box>
                          <Box
                            ml={4}
                            p={2}
                            borderRadius="lg"
                            bg={isExpanded ? "orange.100" : "gray.100"}
                            color={isExpanded ? "#F47327" : "gray.600"}
                            transition="all 0.3s ease"
                          >
                            {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                          </Box>
                        </AccordionButton>
                        <AccordionPanel pb={6} px={6}>
                          <Text
                            fontSize="md"
                            color="gray.600"
                            lineHeight="1.7"
                          >
                            {faq.answer}
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </MotionBox>
              ))}
            </Accordion>
          </MotionBox>

          {/* Bottom CTA */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            textAlign="center"
            p={8}
            bg="white"
            borderRadius="2xl"
            boxShadow="0 10px 40px rgba(0,0,0,0.1)"
            border="1px solid"
            borderColor="gray.100"
          >
            <VStack spacing={4}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="700"
                color="gray.800"
              >
                Ainda tem dúvidas?
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="400px"
              >
                Nossa equipe está pronta para ajudar você a começar sua jornada com o Pygus
              </Text>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, #F47327 0%, #FF6B35 100%)",
                  color: "white",
                  padding: "12px 32px",
                  borderRadius: "50px",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(244,115,39,0.3)"
                }}
              >
                Falar com Especialista
              </motion.button>
            </VStack>
          </MotionBox>

        </VStack>
      </Container>
    </Box>
  )
}