import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: { routes: [], selectedRouteIndex: null, routeIsLoading: false },
  reducers: {
    selectRoute(state, action) {
      state.selectedRouteIndex = action.payload;
    },
    setRouteIsLoading(state, action) {
      state.routeIsLoading = action.payload;
    },
    updateRoutes(state, action) {
      state.routes = action.payload;
    },
  },
});

const routerActions = routerSlice.actions; // включает все reducers из routerSlice
const routerReducer = routerSlice.reducer; // reducer для консигурирования store

export { routerActions, routerReducer };
