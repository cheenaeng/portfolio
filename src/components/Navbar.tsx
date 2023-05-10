import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import PrimaryButton from './PrimaryButton'
import { CgHomeAlt } from '@react-icons/all-files/cg/CgHomeAlt'
import { Link } from 'gatsby'
import { useMediaQuery } from '@chakra-ui/react'

function Navbar() {
  const [isMobile] = useMediaQuery('(max-width:500px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Box sx={{ p: 2, mx: 'auto' }}>
      <HStack>
        {/* <IconButton
          aria-label="home"
          sx={{
            backgroundColor: 'transparent',
            _hover: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <CgHomeAlt fontSize={'1em'} color="orange" />
        </IconButton> */}
        <Link to="/about">
          <PrimaryButton>
            <Text
              className="button-title"
              sx={{ fontSize: isMobile ? '0.7em' : '1.5em' }}
            >
              {' '}
              ABOUT{' '}
            </Text>
          </PrimaryButton>
        </Link>
        <Link to="/mywork">
          <PrimaryButton>
            <Text
              className="button-title"
              sx={{ fontSize: isMobile ? '0.7em' : '1.5em' }}
            >
              MY WORK{' '}
            </Text>
          </PrimaryButton>
        </Link>
        <Link to="/contact">
          <PrimaryButton>
            <Text
              className="button-title"
              sx={{ fontSize: isMobile ? '0.7em' : '1.5em' }}
            >
              {' '}
              CONTACT
            </Text>
          </PrimaryButton>
        </Link>
      </HStack>
    </Box>
  )
}

export default Navbar
