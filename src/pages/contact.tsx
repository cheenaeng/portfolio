import React from 'react'
import Layout from '../components/Layout'
import { Container } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <Layout>
      <Container sx={{ flexGrow: 1 }} maxW="4xl" centerContent>
        <Navbar />
        <Contact />
      </Container>
    </Layout>
  )
}

export default ContactPage
