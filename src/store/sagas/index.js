import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";
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

import { selectCurrentRoute } from "../../store/selectors/selectors";

import { GET_ROUTES, SELECT_ROUTE } from "../constants";

// root saga
export default function* rootSaga() {
  yield takeEvery(GET_ROUTES, handleGetRoutes); // следим за вызовом экшена типа GET_ROUTES
  yield takeLatest(SELECT_ROUTE, handleSelectRoute); // следим за вызовом экшена типа SELECT_ROUTE
}

function* handleGetRoutes() {
  try {
    yield put(setRoutesIsLoading()); // обновляем стейт состояний загрузки маршрутов
    const routes = yield call(fetchRoutes); // отправляем запрос через api
    yield put(updateRoutes(routes)); // обновляем стейт списка маршрутов, запуская экшен updateRoutes
    yield put(selectRoute(0)); // обновляем стейт, устанавливая первый маршрут активным, запуская экшен selectRoute
  } catch {
    yield put(setRouteError("Не удалось загрузить маршруты. Попробуйте позже"));
  }
}

function* handleSelectRoute() {
  try {
    yield put(setTrackIsLoading()); // обновляем стейт состояний загрузки трека
    const { coordinates } = yield select(selectCurrentRoute); // берем из стейта координаты выбранного маршрута
    const waypoints = yield call(fetchTrack, coordinates); // отправляем запрос через api, coordinates - аргумент функции
    yield put(updateTrack(waypoints)); // обновляем стейт трека
  } catch {
    yield put(
      setTrackError("Не удалось загрузить выбранный маршрут. Попробуйте позже")
    );
  }
}
