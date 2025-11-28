import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
    },
    colors: {
        brand: {
            orange: '#F47327',
            teal: '#379598',
            dark: '#1A202C',
            light: '#FFFFFF',
        },
        gradient: {
            main: 'linear-gradient(135deg, #F47327 0%, #FF6B35 100%)',
            teal: 'linear-gradient(135deg, #379598 0%, #2C7A7B 100%)',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.800',
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                borderRadius: 'full',
            },
            variants: {
                solid: {
                    bg: 'brand.orange',
                    color: 'white',
                    _hover: {
                        bg: 'orange.600',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    },
                    transition: 'all 0.2s',
                },
                outline: {
                    borderColor: 'brand.orange',
                    color: 'brand.orange',
                    _hover: {
                        bg: 'orange.50',
                    },
                },
            },
        },
    },
})

export default theme
