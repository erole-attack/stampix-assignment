import React, { useState } from 'react'

export const LanguageContext = React.createContext()

export const LanguageContextProvider = ({ children }) => {
   const [language, setLanguage] = useState('EN');
   return (
      <LanguageContext.Provider value={[language, setLanguage]}>{children}</LanguageContext.Provider>
   )
}