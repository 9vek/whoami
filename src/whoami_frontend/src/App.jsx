import React from "react"
import { render } from "react-dom"

const Container = () => {
  return (
    <div>
      Hello React! 
    </div>
  )
}

render(<Container />, document.getElementById("app"))