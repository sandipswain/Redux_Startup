import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";

import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
const reducer = (state = initialStore, action) => {
  // if (action.type === CLEAR_CART)
  //   return {
  //     ...state,
  //     cart: [],
  //   };

  // if (action.type === DECREASE) console.log("You decreased amount");
  // if (action.type === INCREASE) console.log("You increased amount");
  // if (action.type === REMOVE)
  //   return {
  //     ...state,
  //     cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
  //   };
  // return state;

  let tempCart = [];
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case DECREASE:
      // console.log("You decreased amount");
      tempCart = state.cart.map((cartItem) => {
        // console.log(cartItem);
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    case INCREASE:
      tempCart = state.cart.map((cartItem) => {
        // console.log(cartItem);
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case REMOVE:
      // console.log(action.payload.id);
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case GET_TOTALS:
      // console.log("totals");
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          // cardTotal represents the below object
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === "inc")
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            if (action.payload.toggle === "dec")
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
