import React, { useContext, useState } from 'react'
import { primary, secondary } from '../../../styles/colors'

import { LanguageContext } from '../../../context/context'
import { device } from '../../../styles/device'
import styled from 'styled-components'

const Selector = styled.div`
  justify-self: end;
`

const LanguageButtonWrapper = styled.button`
  border: none;
  background: none;
  color: ${props => props.selected ? secondary.sunny_yellow : primary.white};
  font-weight: ${props => props.selected && 700};
  font-size: 1vw;
  margin: 0 0.3vw 0 0.3vw;

  &:hover {
    cursor: pointer;
    color: ${secondary.blushing_pink}
  }
  
  @media ${device.tablet} { 
    font-size: 1.2vw;
    margin: 0 0.1vw 0 0.1vw;
  }
  @media ${device.mobile} { 
    font-size: 12px;
  }
`

const LanguageButton = (props) => {

  const [language] = useContext(LanguageContext);

  return(
    <LanguageButtonWrapper selected={language === props.value ? true : false} onClick={() => props.onClick()}>
      {props.value}
    </LanguageButtonWrapper>
  )
}

const LanguageSwapper = (props) => {

  const [language, setLanguage] = useContext(LanguageContext);

  const clickHandler = (selection) => {
    setLanguage(selection)
  }

  return(
    <>
      {props.options.map(option => 
        <LanguageButton 
          key={option}
          value={option}
          onClick={() => clickHandler(option)}
        />
      )}
    </>
  )
}

export default function Language() {

   return (
        <Selector>
            <LanguageSwapper options={['NL', 'FR', 'EN']}/>
        </Selector>
   )
 }

 export { LanguageButton, LanguageSwapper}