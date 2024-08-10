import { GET_ARTICLES, SET_LOADING } from "../actions/action";

const initialstate = {
  loading: false,
  articles: [],
};
export const ArticleReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
