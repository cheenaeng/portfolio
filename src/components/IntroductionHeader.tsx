import React from 'react'
import { Box, Grid, Text, GridItem } from '@chakra-ui/react'
import { typewriter } from './Header.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import Navbar from './Navbar'

function IntroductionHeader() {
  return (
    <Box className={typewriter}>
      <Box height="5vh" />
      <Text
        sx={{
          textAlign: 'center',
          color: 'white',
          fontSize: '2em',
          marginX: 'auto',
          fontWeight: 700,
        }}
      >
        Hello World!
      </Text>
      <Box height="5vh" />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
        }}
      >
        <GridItem>
          <Box
            sx={{
              width: '30vh',
              height: '30vh',
              marginX: 'auto',
            }}
          >
            <StaticImage
              src="../images/pixel_avatar.png"
              alt="pixel avatar"
              width={300}
              height={300}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Text
            sx={{
              mt: 2,
              fontSize: 'calc(14px + 0.390625vw)',
              textAlign: 'center',
              color: 'orange',
            }}
            className="name-title"
          >
            {'<'} My name is Cheena {'>'}
          </Text>
        </GridItem>
        <GridItem>
          <Box sx={{ mt: 8 }}>
            <Text
              sx={{
                fontSize: 'calc(15px + 0.390625vw)',
                color: 'white',
                textAlign: 'justify',
              }}
            >
              Hi, I'm a full stack developer with experience in building web
              applications from the ground up and who's always excited to play
              around with new toys - I mean, technologies.
            </Text>
            <Text
              sx={{
                fontSize: 'calc(15px + 0.390625vw)',
                color: 'white',
                textAlign: 'justify',
                mt: 2,
              }}
            >
              When I'm not coding, you might just find me chatting with my nemo
              buddies down in the deep blue sea.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default IntroductionHeader
