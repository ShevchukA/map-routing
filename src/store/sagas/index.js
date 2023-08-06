import { takeEvery, takeLatest } from "redux-saga/effects";
import handleGetRoutes from "./handleGetRoutes";
import handleSelectRoute from "./handleSelectRoute";

import { GET_ROUTES, SELECT_ROUTE } from "../constants";

export default function* rootSaga() {
  yield takeEvery(GET_ROUTES, handleGetRoutes); // следим за вызовом экшена типа GET_ROUTES
  yield takeLatest(SELECT_ROUTE, handleSelectRoute); // следим за вызовом экшена типа SELECT_ROUTE
}
