import { takeEvery, call, put, select, takeLatest } from "redux-saga/effects";
import fetchRoutes from "../../api/routes";
import fetchTrack from "../../api/track";

import {
  selectRoute,
  setRouteError,
  setRoutesIsLoading,
  setTrackError,
  setTrackIsLoading,
  updateRoutes,
  updateTrack,
} from "../actions/actitionCreator";

import { GET_ROUTES, SELECT_ROUTE } from "../constants";

// root saga
export default function* rootSaga() {
  yield watchRoutes();
}

function* watchRoutes() {
  yield takeEvery(GET_ROUTES, handleGetRoutes); // следим за вызовом экшена типа GET_ROUTES
  yield takeLatest(SELECT_ROUTE, handleSelectRoute); // следим за вызовом экшена типа SELECT_ROUTE
}

function* handleGetRoutes() {
  yield put(setRoutesIsLoading()); // обновляем стейт состояний загрузки маршрутов
  try {
    const routes = yield call(fetchRoutes); // отправляем запрос через api
    yield put(updateRoutes(routes)); // обновляем стейт списка маршрутов, запуская экшен updateRoutes
    yield put(selectRoute(0)); // обновляем стейт, устанавливая первый маршрут активным, запуская экшен selectRoute
  } catch {
    yield put(setRouteError("Не удалось загрузить маршруты. Попробуйте позже"));
  }
}

function* handleSelectRoute() {
  yield put(setTrackIsLoading()); // обновляем стейт состояний загрузки трека
  try {
    const { coordinates } = yield select((store) => store.router.selectedRoute); // берем из стейта координаты выбранного маршрута
    const waypoints = yield call(fetchTrack, coordinates); // отправляем запрос через api, coordinates - аргумент функции fetchTrack
    yield put(updateTrack(waypoints)); // обновляем стейт трека
  } catch {
    yield put(
      setTrackError("Не удалось загрузить выбранный маршрут. Попробуйте позже")
    );
  }
}
