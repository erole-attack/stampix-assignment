import { createGlobalStyle }from 'styled-components'
import { device } from './device'
import { secondary } from './colors'

const GlobalStyle = createGlobalStyle`

   * {
      font-family: 'Nunito', sans-serif;
      overflow: hidden;
      color: ${secondary.black};
      @media ${device.mobile} { 
         overflow: visible;
      }
   }

   body {
      all: unset;
      width: 100%;
      height: 100%;
      background-color: ${secondary.petrol};
   }

   h1 {
      font-size: 1.5vw;
      font-weight: 800;
      @media ${device.tablet} { 
         font-size: 2vw;
      }
      @media ${device.mobile} { 
         font-size: 15px;
      }
   }

   h3 {
      font-size: 1.2vw;
      font-weight: 100;
      @media ${device.tablet} { 
         font-size: 1.6vw;
      }
      @media ${device.mobile} { 
         font-size: 12px;
      }
   }

   button {
      font-size: 0.8vw;
      font-weight: 700;
      @media ${device.tablet} { 
         font-size: 1vw;
      }
      @media ${device.mobile} { 
         font-size: 8px;
      }
   }
`

export default GlobalStyle