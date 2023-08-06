import { call, put } from "redux-saga/effects";
import fetchRoutes from "../../api/routes";

import {
  selectRoute,
  setRouteError,
  setRoutesIsLoading,
  updateRoutes,
} from "../actions/actitionCreator";

export default function* handleGetRoutes() {
  try {
    yield put(setRoutesIsLoading()); // обновляем стейт состояний загрузки маршрутов
    const routes = yield call(fetchRoutes); // отправляем запрос через api
    yield put(updateRoutes(routes)); // обновляем стейт списка маршрутов, запуская экшен updateRoutes
    yield put(selectRoute(0)); // обновляем стейт, устанавливая первый маршрут активным, запуская экшен selectRoute
  } catch {
    yield put(setRouteError("Не удалось загрузить маршруты. Попробуйте позже"));
  }
}
