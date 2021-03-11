import React, { useContext } from 'react'

import Button from '../ui elements/Button'
import { LanguageContext } from '../../context/context'
import ReactMarkdown from 'react-markdown'
import { StaticImage } from 'gatsby-plugin-image'
import { device } from '../../styles/device'
import { primary } from '../../styles/colors'
import styled from 'styled-components'
import triageText from './triageText'

const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 50%;
   height: 100%;
   background-color: ${primary.white};
   @media ${device.mobile} { 
      width: 100%;
   }
`

const Section = styled.div`
   text-align: center; 
   margin: 3.2vw 0 3vw 0;
   @media ${device.tablet} { 
      margin-top: 2.5vw;
   }
   @media ${device.mobile} { 
      margin-top: 40px;
   }
`

const ImageContainer = styled.div`
   position: absolute;
   bottom: 0;
   margin-bottom: 2vw;
   display: grid;
   grid-template-columns: auto auto auto;
   justify-items: center;
   width: 22vw;
   height: 3.5vw;
   @media ${device.mobile} { 
      width: 80vw;
      height: 30px;
      margin-bottom: 35px;
   }
`

export default function GoToBusiness() {

   const [language] = useContext(LanguageContext)
   
   const checkLanguage = () => {
      return(
         language === 'EN' ? 'english' : language === 'NL' ? 'dutch' : 'english' //french
      )
   }

   return (
      <Container>
            <Section>
               <ReactMarkdown>{triageText.business.subtitle[checkLanguage()]}</ReactMarkdown>
               <ReactMarkdown>{triageText.business.title[checkLanguage()]}</ReactMarkdown>
               <Button text={triageText.business.button_text[checkLanguage()]} to='https://business.stampix.com'/>
            </Section>
         <ImageContainer>
            <StaticImage 
               src='../../images/orange_logo.png' 
               alt='orange' 
               placeholder='blurred'
               objectFit='contain'
               height={600}
               style={{
                  margin: '0.5vw 0 0.5vw 0'
               }}
            />
            <StaticImage 
               src='../../images/playmobil_logo.png' 
               alt='playmobil' 
               placeholder='blurred'
               objectFit='contain'
               height={600}
               style={{
                  margin: '0 1.7vw 0 1.7vw'
               }}
            />
            <StaticImage 
               src='../../images/luminus_logo.png' 
               alt='luminus' 
               placeholder='blurred'
               objectFit='contain'
               height={600}
            />
         </ImageContainer>
         
      </Container>
   )
}