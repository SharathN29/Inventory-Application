import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import itemReducer from "./itemReducer";
import backlogReducer from "./backlogReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  item: itemReducer,
  backlog: backlogReducer,
  security: securityReducer,
});
