import { LOGIN } from "./types";
export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
};
