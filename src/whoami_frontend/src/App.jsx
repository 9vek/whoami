import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { AuthClient } from "@dfinity/auth-client"
import { canisterId as backendCanisterId, createActor as createBackendActor } from "../../declarations/whoami_backend";
import { canisterId as IICanisterId } from "../../declarations/internet_identity";

class Container extends React.Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      principal: null,
    };
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.whoami = this.whoami.bind(this)
  }

  async componentDidMount() {
    this.authClient = await AuthClient.create()
    const isAuthenticated = await this.authClient.isAuthenticated()
    if (isAuthenticated) {
      this.actor = createBackendActor(backendCanisterId, {
        agentOptions: {
          identity: this.authClient.getIdentity(),
        },
      })
      this.setState({
        isAuthenticated
      })
    }
  }

  async login() {
    await this.authClient.login({
      identityProvider: `http://127.0.0.1:8000/?canisterId=${IICanisterId}`,
      onSuccess: async () => {
        this.actor = createBackendActor(backendCanisterId, {
          agentOptions: {
            identity: this.authClient.getIdentity(),
          },
        })
        this.setState({
          isAuthenticated: true
        })
      },
    });

  }

  async logout() {
    await this.authClient.logout()
    this.actor = undefined
    this.setState({
      isAuthenticated: false,
      principal: null,
    })
  }

  async whoami() {
    if (this.actor) {
      const principal = await this.actor.whoami()
      this.setState({
        principal
      })
    }
    else {
      return
    }
  }

  me() {
    if (this.state.principal) {
      return this.state.principal.toString()
    }
    else if (this.isAuthenticated) {
      return "click the query button to get your principal"
    }
    else {
      return "click the login button to try internet identity"
    }
  }

  whichButton() {
    if (this.state.isAuthenticated) {
      return (
        <div className="flex space-x-4">
          <div onClick={this.whoami} className="cursor-pointer text-white text-2xl font-bold px-4 py-2 m-4 w-fit mx-auto bg-pink-600 hover:bg-pink-500 shadow-md rounded-md">Query</div>
          <div onClick={this.logout} className="cursor-pointer text-white text-2xl font-bold px-4 py-2 m-4 w-fit mx-auto bg-purple-600 hr-pointer text-wover:bg-purple-500 shadow-md rounded-md">Logout</div>
        </div>
      )
    }
    else {
      return (
        <div onClick={this.login} className="cursor-pointer text-white text-2xl font-bold px-4 py-2 m-4 w-fit mx-auto bg-purple-600 hover:bg-purple-500 shadow-md rounded-md">Login</div>
      )
    }
  }

  render() {
    return (
      <div className="container mx-auto max-w-2xl m-8 p-1 bg-purple-50 shadow-lg rounded-lg grid grid-cols-1 place-items-center">
        <div>
          <div className="text-stone-900 text-4xl font-bold text-center mx-16 mt-16 mb-8">WHO AM I?</div>
          <div className="text-stone-500 text-lg font-bold px-2 py-2 w-fit mb-8 mx-auto">
            {this.me()}
          </div>
        </div>
        <hr className="m-4 px-4 w-full text-purple-800" />
        {this.whichButton()}
      </div>
    )
  }

}


const root = createRoot(document.getElementById("app"))
root.render(<Container />)