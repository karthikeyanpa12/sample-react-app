import { combineReducers } from "redux";
import reducer from "./reducer";
import apiReducer from "./apiReducer";

export default combineReducers({
  counter: reducer,
  apiData: apiReducer,
});
