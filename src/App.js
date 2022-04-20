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

import reducer from "./reducer";

// dispatch method - send actions to the store
// actions (objects) - Must have type property - what kind of action
// Dont mutate the state  - redux built on immutability (copy)

// store.getState() -

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// reducer

// const store = createStore(() => {});
const store = createStore(reducer, initialStore);
function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
