import { combineReducers } from "redux";
import simpleReducer from "./sampleReducer";
import counterReducer from "./counterReducer";

export default combineReducers({
  simpleReducer,
  counterReducer
});
