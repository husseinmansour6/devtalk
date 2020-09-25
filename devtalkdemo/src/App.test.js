import React from "react"
import { shallow } from "enzyme"
import App from "./App"

describe("App component", () => {
  let component
  beforeEach(() => {
    component = shallow(<App />)
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
