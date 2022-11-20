import React from "react"
import { render } from "react-dom"
import "../assets/index.css"

const Container = () => {

  return (
    <div className="container mx-auto min-h-screen max-w-2xl m-1 p-1 bg-stone-100">
      Hello React! 
    </div>
  )

}


render(<Container />, document.getElementById("app"))