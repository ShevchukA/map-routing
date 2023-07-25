import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: { routes: [], selectedRoute: null, routeIsLoading: false },
  reducers: {
    selectRoute(state, action) {
      state.selectedRoute = state.routes[action.payload];
    },
    setRouteIsLoading(state, action) {
      state.routeIsLoading = action.payload;
    },
    updateRoutes(state, action) {
      state.routes = action.payload;
      state.selectedRoute = action.payload[0];
    },
  },
});

const routerActions = routerSlice.actions; // включает все reducers из routerSlice
const routerReducer = routerSlice.reducer; // reducer для консигурирования store

export { routerActions, routerReducer };
