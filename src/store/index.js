import { configureStore } from "@reduxjs/toolkit";
import { routerReducer } from "./router-slice";

const store = configureStore({ reducer: { router: routerReducer } });

export default store;
