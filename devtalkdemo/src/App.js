import React, { Component } from "react"
import Proptypes from "prop-types"

class App extends Component {
  render() {
    const { header, desc } = this.props

    if (!header) {
      return null
    }

    return (
      <div className="mainDiv" data-test="mainDiv">
        <h1 className="header" data-test="header">
          {header}
        </h1>
        <p className="desc" data-test="desc">
          {desc}
        </p>
      </div>
    )
  }
}

App.prototypes = {
  header: Proptypes.string,
  desc: Proptypes.string
}

export default App
