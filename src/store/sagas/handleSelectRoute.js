import { call, put, select } from "redux-saga/effects";

import fetchTrack from "../../api/track";

import {
  setTrackError,
  setTrackIsLoading,
  updateTrack,
} from "../actions/actitionCreator";

import { selectCurrentRoute } from "../../store/selectors/selectors";

export default function* handleSelectRoute() {
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
