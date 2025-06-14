import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import mereImg from '../../assets/mereImg.png'
import joaoImg from '../../assets/joaoImage.png'
import thiagoImg from '../../assets/thiagoImg.png'
import samuelImg from '../../assets/samuelImg.png'
import catarinaImg from '../../assets/catarinaImg.png'
import { MemberItem } from '../memberItem'

export const TimeArea = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const timeDate = [
    {
      name: 'Mére Lander',
      phase: 'Um aplicativo para otimizar a terapia fonoaudiológica.',
      post: 'CEO',
      image: mereImg,
    },
    {
      name: 'Samuel dos Santos',
      phase: 'Pygus é a marca da sua terapia.',
      post: 'Sócio - Vendas/Administrativo',
      image: samuelImg,
    },
    {
      name: 'João Victor Lobão',
      phase: 'Conectando você ao mundo, palavra por palavra.',
      post: 'CTO',
      image: joaoImg,
    },
    {
      name: 'Thiago José',
      phase: 'Pygus, solução inovadoras para a fonoaudiologia.',
      post: 'Engenheiro de software',
      image: thiagoImg,
    },
    {
      name: 'Ana Catarina',
      phase: 'Tecnologia e cuidado: reinventando a fonoaudiologia.',
      post: 'CDO/Senior Product Design',
      image: catarinaImg,
    },
  ]

  return (
    <Flex alignItems="center" flexDir="column">
      <Flex mt={10} gap={1} alignItems="center">
        <Text
          fontSize={isMobile ? 'lg' : '3xl'}
          fontFamily="Poppins"
          fontWeight="300"
          color="#52525B"
        >
          Conheça nosso
        </Text>
        <Text
          fontSize={isMobile ? '2xl' : '3xl'}
          fontFamily="Poppins"
          fontWeight="500"
          color="#F47327"
        >
          time
        </Text>
      </Flex>
      <Flex
        maxW="1000px"
        flexWrap="wrap"
        justifyContent="center"
        gap={10}
        mt={16}
      >
        {timeDate.map((item, index) => (
          <MemberItem
            key={index}
            image={item.image}
            name={item.name}
            phase={item.phase}
            post={item.post}
          />
        ))}
      </Flex>
    </Flex>
  )
}
