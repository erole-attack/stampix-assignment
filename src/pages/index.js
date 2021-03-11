import React, { useState } from 'react'

import Background from '../components/triage/Background'
import GlobalStyle from '../styles/GlobalSyle'
import Language from '../components/triage/Language/Language'
import { StaticImage } from 'gatsby-plugin-image'
import UserRedirect from '../components/triage/UserRedirect'
import { device } from '../styles/device'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 8vw auto;
  align-items: center;
  @media ${device.tablet} { 
    grid-template-columns: 10vw auto;
  }
  @media ${device.mobile} { 
    grid-template-columns: 100px auto;
  }
`

export default function App() {

  return (
    <Background>
        <Container>
          <StaticImage 
            src='../images/stampix_logo.png' 
            alt='stampix'
            placeholder='blurred'
            width={1000}
          />
          <Language/>
        </Container>
        <UserRedirect/>
        <GlobalStyle/>
    </Background>
  )
}