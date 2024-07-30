import { Flex } from '@chakra-ui/react'
import backgroundImage from '../../assets/backgroundVideo.svg'

export const VideoArea = () => {
  return (
    <Flex
      w="100%"
      h="1000px"
      bgImage={backgroundImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      alignItems="center"
      justifyContent="center"
   
    >
      <iframe
        width="910"
        height="511"
        src="https://www.youtube.com/embed/vbtQdy2dO80?si=qGlFM38626EvdyJO"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </Flex>
  )
}
