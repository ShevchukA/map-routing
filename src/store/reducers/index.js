import { combineReducers } from "redux";
import router from "./router";
import errors from "./errors";

const rootReducer = combineReducers({ router, errors });

export default rootReducer;
