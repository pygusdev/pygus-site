import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './home'

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}

export default App
