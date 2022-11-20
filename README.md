# whoami

This is a `whoami` example intended to demonstrate how an Internet Computer developer might integrate with the [dfinity/internet-identity](https://github.com/dfinity/internet-identity). The demo is currently focus on showing how to test the `internet_identity` canister functions in a local environment. 

This demo is inspired by the [krpeacock/auth-client-demo)](https://github.com/krpeacock/auth-client-demo), and the code in this demo can serve as a complement to it. You may learn from this demo if your project is:

- create from the `dfx new` command with a two canisters (front-end & back-end) structure. 
- using `Rust` as back-end language
- intended to integrate the `React` framework
- intended to integrate `Tailwind CSS`
- having some errors when following other tutorials

## Running the project locally

Clone the project and use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, you can see the urls for each of the canisters in your console. 

## DFX Default README

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with whoami, see the following documentation available online:

- [Quick Start](https://smartcontracts.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://smartcontracts.org/docs/developers-guide/sdk-guide.html)
- [Rust Canister Devlopment Guide](https://smartcontracts.org/docs/rust-guide/rust-intro.html)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://smartcontracts.org/docs/candid-guide/candid-intro.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd whoami/
dfx help
dfx canister --help
```

