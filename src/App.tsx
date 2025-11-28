import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './home'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}

export default App
