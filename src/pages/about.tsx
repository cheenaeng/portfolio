import React from 'react'
import Layout from '../components/Layout'
import { Container } from '@chakra-ui/react'
import IntroductionHeader from '../components/IntroductionHeader'
import Navbar from '../components/Navbar'

function AboutPage() {
  return (
    <Layout>
      <Container
        sx={{ flexGrow: 1, minWidth: '350px' }}
        maxW="4xl"
        centerContent
      >
        <Navbar />
        <IntroductionHeader />
      </Container>
    </Layout>
  )
}

export default AboutPage
