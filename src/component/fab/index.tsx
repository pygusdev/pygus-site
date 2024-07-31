import { Image, Box, Link, Flex, useBreakpointValue } from '@chakra-ui/react'
import whatsappIcon from '../../assets/whatsappIcon.svg'

export const WhatsAppFAB = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const message = encodeURIComponent(
    'Olá! Vim do site e gostaria de mais informações',
  )

  return (
    <Box
      position="fixed"
      bottom={isMobile ? 16 : 4}
      right={isMobile ? 8 : 4}
      zIndex="tooltip"
    >
      <Flex>
        <Link
          borderRadius="full"
          href={`https://wa.me/+5582988518859?text=${message}`}
          isExternal
          p={isMobile ? 3 : 4}
          bgColor="#10B981"
        >
          <Image
            src={whatsappIcon}
            alt="Icone WhatsApp"
            w={isMobile ? 10 : 12}
            h={isMobile ? 10 : 12}
          />
        </Link>
      </Flex>
    </Box>
  )
}
