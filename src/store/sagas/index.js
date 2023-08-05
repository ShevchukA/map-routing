import { takeEvery, call, put } from "redux-saga/effects";
import fetchRoutes from "../../api/routes";
import { selectRoute, updateRoutes } from "../actions/actitionCreater";

import {
  GET_ROUTES,
  SELECT_ROUTE,
  SET_ROUTE_IS_LOADING,
  UPDATE_ROUTES,
  UPDATE_TRACK,
  SET_TRACK_IS_LOADING,
  SET_ROUTE_ERROR,
  SET_TRACK_ERROR,
} from "../constants";

function* handleGetRoutes() {
  const routes = yield call(fetchRoutes);
  yield put(updateRoutes(routes));
  yield put(selectRoute(0));
}

function* watchRoutes() {
  console.log("watchRoutes saga");
  yield takeEvery(GET_ROUTES, handleGetRoutes); // следим за вызовом экшена GET_ROUTES и запускаем запрос
}

// root saga
export default function* rootSaga() {
  yield watchRoutes();
}
