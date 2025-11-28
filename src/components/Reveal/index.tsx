import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'

interface RevealProps extends BoxProps {
    children: React.ReactNode
    delay?: number
    fullHeight?: boolean
}

export const Reveal = ({ children, delay = 0, fullHeight = false, ...props }: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <Box ref={ref} position="relative" width="100%" height={fullHeight ? "100%" : "auto"} {...props}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
                style={{ height: fullHeight ? "100%" : "auto" }}
            >
                {children}
            </motion.div>
        </Box>
    )
}
