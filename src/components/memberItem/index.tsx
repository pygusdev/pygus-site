import { Flex, Text, useBoolean } from '@chakra-ui/react'
import { MemberItemProps } from './types'

export const MemberItem = ({ image, name, phase, post }: MemberItemProps) => {
  const [isHovered, setIsHovered] = useBoolean(false)
  return (
    <Flex
      w="260px"
      h="180px"
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="2xl"
      flexDir="column"
      onMouseEnter={setIsHovered.on}
      onMouseLeave={setIsHovered.off}
    >
      <Flex w="100%" justifyContent="flex-end">
        <Flex
          alignItems="center"
          justifyContent="center"
          bgColor="rgba(250, 250, 250, 0.7)"
          w="80%"
          h="38px"
          borderRadius="lg"
          mt={3}
          mr={3}
          opacity={isHovered ? 0 : 1}
          transition="opacity 0.5s ease-in-out"
        >
          <Text fontWeight="500" fontSize="lg" fontFamily="Poppins">
            {name}
          </Text>
        </Flex>
      </Flex>
      <Flex
        _hover={{ opacity: 1 }}
        opacity={0}
        w="100%"
        borderRadius="2xl"
        h="166px"
        alignSelf="flex-end"
        bgColor="#379598"
        flexDir="column"
        transition="opacity 0.5s ease-in-out"
        py={6}
        p={4}
      >
        <Flex>
          <Text
            fontWeight="500"
            fontSize="sm"
            color="white"
            fontFamily="Poppins"
          >
            {name}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="xs" color="white" fontFamily="Poppins">
            {post}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="xs" color="white" fontFamily="Poppins" mt={2}>
            {phase}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
