import Language from '../Language'
import { LanguageContextProvider } from '../../../../context/context'
import React from "react"
import renderer from "react-test-renderer"

describe("Language", () => {
   it("renders correctly", () => {
      const tree = renderer
         .create(
            <LanguageContextProvider>
               <Language options={['NL', 'FR', 'EN']} />
            </LanguageContextProvider>
         )
         .toJSON()
      expect(tree).toMatchSnapshot()
   })
})