import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { device } from '../../styles/device'
import styled from 'styled-components'

const BackGround = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   display: grid;
   place-content: center;
`

const PageWrapper = styled.div`
   display: grid;
   height: 100vh;
   grid-template-rows: minmax(8vw, 1fr) 32vw minmax(8vw, 1fr);
   width: 64vw;
   @media ${device.tablet} { 
      grid-template-rows: minmax(6vw, 1fr) 38vw minmax(6vw, 1fr);
      width: 82vw;
   }
   @media ${device.mobile} { 
      grid-template-rows: minmax(70px, 1fr) 700px minmax(50px, 1fr);
      width: 95vw;
   }
`

export default function Background(props) {
   return (
      <BackGround>
         <PageWrapper>
            {props.children}
         </PageWrapper>
         <StaticImage 
            src='../../images/background.png'
            loading='eager'
            style={{
               position: 'absolute',
               opacity: '0.2',
               zIndex: '-1',
               height: '100vh',
               width: '100vw'
            }}
            alt='background'
            placeholder='blurred'
         />
      </BackGround>
   )
}