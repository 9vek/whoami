use candid::Principal;
use ic_cdk::caller;

#[ic_cdk_macros::query]
fn whoami() -> Principal {
    caller()
}
