import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducer from "../reducers/Reducer";
import { thunk } from "redux-thunk";
import { ArticleReducer } from "../reducers/ArticleReducer";
import { ProgressReducer } from "../reducers/ProgreeReduser";
const RootReducer = combineReducers({
  userState: UserReducer,
  ArticleState: ArticleReducer,
  progressState: ProgressReducer,
});
const AppStore = createStore(RootReducer, applyMiddleware(thunk));
export default AppStore;
