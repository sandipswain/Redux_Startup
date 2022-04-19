import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state , action
// state - old state/state before update
// return updated or old state

import { createStore } from "redux";

import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

// dispatch method - send actions to the store
// actions (objects) - Must have type property - what kind of action
// Dont mutate the state  - redux built on immutability (copy)

// store.getState() -

// initial store
const initialStore = {
  count: 0,
  name: "sandy",
};

// reducer

// const store = createStore(() => {});
const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
console.log("store", store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
