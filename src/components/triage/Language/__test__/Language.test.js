import Language from '../Language'
import React from "react"
import renderer from "react-test-renderer"

describe("Language", () => {
   it("renders correctly", () => {
      const tree = renderer
         .create(<Language options={['NL', 'FR', 'EN']} />)
         .toJSON()
      expect(tree).toMatchSnapshot()
   })
})