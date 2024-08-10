import { SET_USER } from "../actions/action";

const initialstate = {
  user: null,
};

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default UserReducer;

 