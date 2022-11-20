import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

class Container extends React.Component {



  render() {
    return (
      <div className="container mx-auto max-w-2xl m-4 p-1 bg-purple-50 shadow-lg rounded-lg grid grid-cols-1 place-items-center">
        <div>
          <div className="text-stone-900 text-4xl font-bold text-center m-16">WHO AM I?</div>
          <div className="cursor-pointer text-white text-2xl font-bold px-4 py-2 m-4 w-fit mx-auto bg-purple-600 hover:bg-purple-500 shadow-md rounded-md">Login</div>
        </div>
      </div>
    )
  }

}


const root = createRoot(document.getElementById("app"))
root.render(<Container />)