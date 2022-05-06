import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 20px;
  color: red;
`;

const HomePage: NextPage = () => {
  return (  
    <>
      <Head>
        <title>Furniture Marketplace</title>
        <meta name="description" content="Marketplace to get the best furniture in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default HomePage
