import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: { routes: [], selectedRoute: null, routesIsLoading: false },
  reducers: {
    selectRoute(state, action) {
      state.selectedRoute = state.routes[action.payload];
    },
    setRouteIsLoading(state, action) {
      state.routesIsLoading = true;
    },
    updateRoutes(state, action) {
      state.routes = action.payload;
      state.selectedRoute = action.payload[0];
      state.routesIsLoading = false;
    },
  },
});

const routerActions = routerSlice.actions; // включает все reducers из routerSlice
const routerReducer = routerSlice.reducer; // reducer для консигурирования store

// actin creator function (thunk) для получения данных по маршрутам
const fetchRoutes = () => {
  return async (dispatch) => {
    dispatch(routerActions.setRouteIsLoading());
    const response = await fetch("https://api.npoint.io/a1d9abab6c190cee54c1");

    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    dispatch(routerActions.updateRoutes(data || [])); // возвращаем пустой массив в случае ошибки
  };
};

export { routerActions, routerReducer, fetchRoutes };
