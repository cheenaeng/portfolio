import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import backgroundImage from '../images/bg-space.jpg'
import '../styles/global.css'

function Layout({ children }: BoxProps) {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundImage={`url(${backgroundImage})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover,contain"
      backgroundPosition="center"
      sx={{ overflowY: 'auto', overflowX: 'hidden' }}
    >
      <>{children}</>
    </Box>
  )
}

export default Layout
