import React from 'react'
import { device } from '../../styles/device'
import { secondary } from '../../styles/colors'
import styled from 'styled-components'

const Wrapper = styled.button`
   border-style: none;
   background-color: ${secondary.turquoise + 'B3'}; // 2 digit HEX prefix for 70% opacity
   border-radius: 0.4vw;
   width: 18vw;
   height: 4vw;
   margin: 2vw 0 3.5vw 0;

   &:hover{
      cursor: pointer;
      background-color: ${secondary.petrol + 'B3'}; // 2 digit HEX prefix for 70% opacity
      color: white;
   }
   
   @media ${device.tablet} { 
      border-radius: 0.4vw;
      width: 22vw;
      height: 4.8vw;
      margin: 2vw 0 6vw 0;
   }
   @media ${device.mobile} { 
      border-radius: 0.4vw;
      width: 180px;
      height: 35px;
      margin: 30px 0 10px 0;
   }
`
 
export default function Button(props) {
   return (
      <a href={props.to}>
         <Wrapper>
            {props.text}
         </Wrapper>
      </a>
   )
  }