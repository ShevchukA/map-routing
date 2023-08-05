import {
  SELECT_ROUTE,
  SET_ROUTE_IS_LOADING,
  UPDATE_ROUTES,
  UPDATE_TRACK,
  SET_TRACK_IS_LOADING,
  SET_ROUTE_ERROR,
  SET_TRACK_ERROR,
} from "../constants";

export const selectRoute = (payload) => ({
  type: SELECT_ROUTE,
  payload,
});

export const setRouteIsLoading = () => ({
  type: SET_ROUTE_IS_LOADING,
});

export const setTrackIsLoading = () => ({
  type: SET_TRACK_IS_LOADING,
});

export const updateRoutes = (payload) => ({
  type: UPDATE_ROUTES,
  payload,
});

export const updateTrack = (payload) => ({
  type: UPDATE_TRACK,
  payload,
});

export const setRouteError = (payload) => ({
  type: SET_ROUTE_ERROR,
  payload,
});

export const setTrackError = (payload) => ({
  type: SET_TRACK_ERROR,
  payload,
});
