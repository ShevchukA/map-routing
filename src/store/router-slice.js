import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: {
    routes: [],
    selectedRoute: null,
    track: null,
    trackIsLoading: true,
    routesIsLoading: true,
    error: null,
  },
  reducers: {
    selectRoute(state, action) {
      state.selectedRoute = state.routes[action.payload];
    },
    setRouteIsLoading(state) {
      state.routesIsLoading = true;
    },
    updateRoutes(state, action) {
      state.routes = action.payload;
      state.selectedRoute = action.payload[0];
      state.routesIsLoading = false;
    },
    setTrackIsLoading(state) {
      state.trackIsLoading = true;
    },
    updateTrack(state, action) {
      state.track = action.payload;
      state.trackIsLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      alert(action.payload.message);
    },
  },
});

const routerActions = routerSlice.actions; // включает все reducers из routerSlice
const routerReducer = routerSlice.reducer; // reducer слайса для конфигурирования store

export { routerActions, routerReducer };
