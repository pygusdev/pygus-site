import { Box, Text, Container, VStack, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const MotionBox = motion(Box)

export const VideoSection = () => {
  return (
    <Box
      py={20}
      background="linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        width="200px"
        height="200px"
        borderRadius="50%"
        background="linear-gradient(45deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        width="150px"
        height="150px"
        borderRadius="20px"
        background="linear-gradient(45deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxW="1200px">
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
              color="white"
              mb={4}
            >
              Veja o Pygus em Ação
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="600px"
              lineHeight="1.6"
            >
              Descubra como nossa tecnologia está transformando a vida de milhares de famílias
            </Text>
          </MotionBox>

          {/* Video Player */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            w="100%"
            maxW="900px"
          >
            <Box
              position="relative"
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="0 25px 80px rgba(0,0,0,0.4)"
              bg="gray.900"
              border="1px solid"
              borderColor="gray.700"
            >
              {/* Video Container */}
              <AspectRatio ratio={16 / 9}>
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/vbtQdy2dO80?si=qGlFM38626EvdyJO&rel=0&modestbranding=1"
                  title="Pygus - Demonstração"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  borderRadius="3xl"
                />
              </AspectRatio>

              {/* Decorative Border */}
              <Box
                position="absolute"
                top="-2px"
                left="-2px"
                right="-2px"
                bottom="-2px"
                borderRadius="3xl"
                background="linear-gradient(135deg, #667eea, #764ba2, #667eea)"
                zIndex={-1}
              />
            </Box>

            {/* Video Stats/Info */}
            <VStack spacing={4} mt={8} textAlign="center">
              <Text color="gray.400" fontSize="sm">
                ⭐ Mais de 100.000 visualizações
              </Text>
              
              <Box
                display="flex"
                gap={6}
                flexWrap="wrap"
                justify="center"
                color="gray.300"
                fontSize="sm"
              >
                <Text>🎯 Resultados Comprovados</Text>
                <Text>👨‍👩‍👧‍👦 Aprovado por Famílias</Text>
                <Text>🏆 Reconhecido por Especialistas</Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* Call to Action */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <VStack spacing={4}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="600"
                color="white"
              >
                Pronto para começar?
              </Text>
              <Text
                fontSize="md"
                color="gray.400"
                maxW="500px"
              >
                Junte-se a milhares de famílias que já estão transformando a comunicação de suas crianças
              </Text>
            </VStack>
          </MotionBox>

        </VStack>
      </Container>
    </Box>
  )
}