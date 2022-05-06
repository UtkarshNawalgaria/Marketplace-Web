import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'


export const Container = styled.header`
    background-color: #2874f0;
    padding: 20px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 75%;
  margin: 0 auto;
`

function Header() {
  return (
    <Container>
      <FlexContainer>
        <div>
          <Link href="/">
            <a>
              <Image
                src="/images/flipkart-logo.png"
                alt="Logo"
                width={75}
                height={20}
              >
              </Image>
            </a>
          </Link>
        </div>
        <Navigation />
      </FlexContainer>
    </Container>
  )
}

export default Header