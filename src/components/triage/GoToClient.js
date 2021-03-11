import React, { useContext } from 'react'

import Button from '../ui elements/Button'
import { LanguageContext } from '../../context/context'
import ReactMarkdown from 'react-markdown'
import { StaticImage } from 'gatsby-plugin-image'
import { device } from '../../styles/device'
import { secondary } from '../../styles/colors'
import styled from 'styled-components'
import triageText from './triageText'

const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 50%;
   height: 100%;
   background-color: ${secondary.sunny_yellow + '7F'}; // 2 digit HEX prefix for 50% opacity
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

export default function GoToClient() {

   const [language] = useContext(LanguageContext)
   
   const checkLanguage = () => {
      return(
         language === 'EN' ? 'english' : language === 'NL' ? 'dutch' : 'english' //french
      )
   }

   return (
      <Container>
         <Section>
            <ReactMarkdown>{triageText.consumer.subtitle[checkLanguage()]}</ReactMarkdown>
            <ReactMarkdown>{triageText.consumer.title[checkLanguage()]}</ReactMarkdown>
            <Button text={triageText.consumer.button_text[checkLanguage()]}to='https://stampix.com'/>
         </Section>
         <StaticImage 
            src='../../images/iphone XR.png' 
            alt='iphone XR' 
            placeholder='blurred'
            style={{
               width:  '40%',
               position: 'absolute',
               bottom: '0',
               filter: 'drop-shadow(0px 60px 60px rgba(0, 0, 0, 0.331267))'
            }}
            width={1700}
         />
      </Container>
   )
}