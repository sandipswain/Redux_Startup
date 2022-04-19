import { DECREASE, INCREASE } from "./actions";
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // We shouldnt mutate the state
    // state.count = state.count - 1;
    // This way we are returning a new object
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) return { ...state, count: state.count + 1 };

  return state;
};

export default reducer;
