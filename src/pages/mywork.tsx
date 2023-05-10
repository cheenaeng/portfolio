import React from 'react'
import Layout from '../components/Layout'
import { Container, Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import PersonalProjectsCarousell from '../components/PersonalProjectsCarousell'

function MyWork() {
  return (
    <Layout>
      <Container sx={{ flexGrow: 1 }} maxW="4xl" centerContent>
        <Navbar />
        <PersonalProjectsCarousell />
      </Container>
    </Layout>
  )
}

export default MyWork
