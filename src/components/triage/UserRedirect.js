import GoToBusiness from './GoToBusiness'
import GoToClient from './GoToClient'
import React from 'react'
import { device } from '../../styles/device'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 1%;
  background-color: white;
  @media ${device.mobile} { 
    flex-direction: column;
  }
`

export default function UserRedirect() {
   return (
     <Container>
       <GoToClient/>
       <GoToBusiness/>
     </Container>
   )
 }