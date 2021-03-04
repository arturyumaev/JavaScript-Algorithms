import { CHANGE_THEME } from "../types";

const initialStateTheme = {
  value: 'light',
};

export const themeReducer = (state = initialStateTheme, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: state.value == 'light' ? 'dark' : 'light' };

    default:
      return state;
  }
}

