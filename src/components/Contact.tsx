import {
  Box,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { IoLogoLinkedin } from '@react-icons/all-files/io/IoLogoLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { AiTwotoneMail } from '@react-icons/all-files/ai/AiTwotoneMail'
import { navigate } from 'gatsby'
function Contact() {
  const allContactInfo = [
    {
      icon: <IoLogoLinkedin fontSize={60} />,
      link: 'https://www.linkedin.com/in/cheena-eng-001',
    },
    {
      icon: <FaGithub fontSize={60} />,
      link: 'https://github.com/cheenaeng ',
    },
    {
      icon: <AiTwotoneMail fontSize={60} />,
      link: 'mailto:cheena94sing@gmail.com',
    },
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: '80%',
          height: '40vh',
          mt: 10,
          mx: 'auto',
        }}
      >
        <HStack sx={{ gap: 3 }}>
          {allContactInfo.map((info) => (
            <Box
              sx={{
                boxShadow: '0px 0px 8px rgba(255,255,255,0.8)',
                backgroundColor: 'orange',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => {
                window.location.replace(info.link)
              }}
            >
              {info.icon}
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

export default Contact
