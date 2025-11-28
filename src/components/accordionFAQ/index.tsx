import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { AccordionFAQProps } from './types'

export const AccordionFAQ = ({ title, description }: AccordionFAQProps) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple borderRadius="lg">
      <AccordionItem bgColor="#EFF6FF" borderRadius="lg" borderWidth={0}>
        <h2>
          <AccordionButton
            fontSize="lg"
            fontWeight="500"
            fontFamily="Poppins"
            color="#3F3F46"
            _hover={{ bgColor: '#DBEAFE' }}
          >
            <Box as="span" flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          fontWeight="400"
          color="#3F3F46"
          fontSize="md"
          fontFamily="Poppins"
        >
          {description}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
