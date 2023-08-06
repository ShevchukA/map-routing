import {
  SELECT_ROUTE,
  SET_ROUTE_IS_LOADING,
  UPDATE_ROUTES,
  UPDATE_TRACK,
  SET_TRACK_IS_LOADING,
} from "../constants";

const initialState = {
  routes: [],
  routesIsLoading: true,
  selectedRoute: null,
  track: null,
  trackIsLoading: false,
};

const router = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROUTE_IS_LOADING:
      return { ...state, routesIsLoading: true };
    case UPDATE_ROUTES:
      return {
        ...state,
        routes: payload,
        routesIsLoading: false,
      };
    case SELECT_ROUTE:
      return { ...state, selectedRoute: state.routes[payload] };
    case SET_TRACK_IS_LOADING:
      return { ...state, trackIsLoading: true };
    case UPDATE_TRACK:
      return { ...state, track: payload, trackIsLoading: false };
    default:
      return state;
  }
};

export default router;
