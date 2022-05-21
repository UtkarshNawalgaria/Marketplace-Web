import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import HeroBanner from '../components/HeroBanner'
import { DefaultContainer } from '../styles/global'

const Container = styled(DefaultContainer)``

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Furniture Marketplace</title>
        <meta name="description" content="Marketplace to get the best furniture in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HeroBanner />
      </Container>
    </>
  )
}

export default HomePage
