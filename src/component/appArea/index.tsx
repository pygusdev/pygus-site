import { Box, Text, Image, Flex,  } from "@chakra-ui/react";
import backgroundApp from "../../assets/backgroundApp.svg";
import ImagemApp from "../../assets/ImagemApp.svg";

export const AppArea = () => {
  return (
    
    <Box 
      mt={56}
      bgImage={backgroundApp}   
    >
      <Flex
        ml={48}
        mr={16}
    >
      <Text 
        textAlign="right"
        fontWeight='light'
        fontSize= '4xl'
        color="#363636"
        mb={5}
        width='100%'
      >
        O Pygus é um recurso com{" "}
        <Text
          display="inline"
          fontSize="5xl"
          color="#F47327"
        >
          pistas auditivas e visuais
        </Text>
        <Text
           fontWeight='light'
           fontSize= '4xl'
           color="#363636"
        >
        que propicia a percepção do fonema trabalhado  na      
        <br />estrutura da palavra.
        </Text>
      </Text>
      </Flex> 
      <Image src={ImagemApp} alt="Imagem do App" />
    </Box>
  );
};

