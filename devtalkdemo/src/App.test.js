import React from "react"
import { shallow } from "enzyme"
import App from "./App"
import checkPropTypes from "check-prop-types"

describe("App component", () => {
  describe("checking proptypes", () => {
    it("should render without warnings", () => {
      const expectedProps = {
        header: "header1",
        desc: "desc1"
      }

      const propCheck = checkPropTypes(
        App.propTypes,
        expectedProps,
        "props",
        App.name
      )

      expect(propCheck).toBeUndefined()
    })
  })
  describe("have props", () => {
    let component
    beforeEach(() => {
      const props = {
        header: "header1",
        desc: "desc1"
      }
      component = shallow(<App {...props} />)
      return component
    })
    it("should render without errors", () => {
      const wrapper = component.find("[data-test='mainDiv']")
      expect(wrapper.length).toEqual(1)
    })
    it("should have header", () => {
      const header = component.find("[data-test='header']")
      expect(header.length).toEqual(1)
    })
    it("should have description", () => {
      const desc = component.find("[data-test='desc']")
      expect(desc.length).toEqual(1)
    })
  })
  describe("have no props", () => {
    let component
    beforeEach(() => {
      component = shallow(<App />)
      return component
    })
    it("should not render", () => {
      const wrapper = component.find("[data-test='mainDiv']")
      expect(wrapper.length).toEqual(0)
    })
  })
})
