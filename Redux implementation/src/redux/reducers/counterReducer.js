import { DECREMENT, INCREMENT } from "../types";

const initialStateCounter = {
  value: 0,
};

export const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      }

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      }

    default:
      return state;
  }
}