import { CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export const async_inc = () => (dispatch => {
  setTimeout(() => dispatch(increment()), 1000)
})

export const change_theme = () => ({
  type: CHANGE_THEME,
})
