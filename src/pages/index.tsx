import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Container } from '@chakra-ui/react'
import Layout from '../components/Layout'
import IntroductionHeader from '../components/IntroductionHeader'
import { navigate } from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate('/about')
  }, [])
  return (
    <Layout>
      <Container sx={{ flexGrow: 1 }} maxW="4xl" centerContent>
        <></>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
