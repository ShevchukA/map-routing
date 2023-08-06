import { takeEvery, call, put, select } from "redux-saga/effects";
import fetchRoutes from "../../api/routes";
import fetchTrack from "../../api/track";

import {
  selectRoute,
  setRouteError,
  setTrackError,
  setTrackIsLoading,
  updateRoutes,
  updateTrack,
} from "../actions/actitionCreator";

import { GET_ROUTES, SELECT_ROUTE } from "../constants";

function* watchRoutes() {
  yield takeEvery(GET_ROUTES, handleGetRoutes); // следим за вызовом экшена GET_ROUTES и запускаем запрос
}

function* handleGetRoutes() {
  try {
    const routes = yield call(fetchRoutes);
    yield put(updateRoutes(routes));
    yield put(selectRoute(0));
  } catch {
    yield put(setRouteError("Не удалось загрузить маршруты. Попробуйте позже"));
  }
  yield watchSelectRoute(); // !!!!
}

function* watchSelectRoute() {
  yield takeEvery(SELECT_ROUTE, handleSelectRoute);
}

function* handleSelectRoute() {
  yield put(setTrackIsLoading());
  try {
    const { coordinates } = yield select((store) => store.router.selectedRoute);
    const waypoints = yield call(fetchTrack, coordinates);
    yield put(updateTrack(waypoints));
  } catch {
    yield put(
      setTrackError("Не удалось загрузить выбранный маршрут. Попробуйте позже")
    );
  }
}

// root saga
export default function* rootSaga() {
  yield watchRoutes();
}
