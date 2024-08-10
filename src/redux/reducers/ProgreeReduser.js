import { SET_PROGRESS } from "../actions/action";

const initialstate = {
  progress: 0,
};
export const ProgressReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
};
