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
const routerReducer = routerSlice.reducer; // reducer для конфигурирования store

// actin creator function (thunk) для получения данных по маршрутам
const fetchRoutes = () => {
  return async (dispatch) => {
    dispatch(routerActions.setRouteIsLoading());
    try {
      const response = await fetch(
        "https://api.npoint.io/a1d9abab6c190cee54c1"
      );

      if (!response.ok) {
        throw new Error("Не удалось загрузить маршруты. Попробуйте позже");
      }

      const data = await response.json();
      dispatch(routerActions.updateRoutes(data || [])); // возвращаем пустой массив в случае ошибки
    } catch (error) {
      dispatch(routerActions.setError({ message: error }));
    }
  };
};

// thunk для получения данных по треку
const fetchTrack = (points) => {
  return async (dispatch) => {
    dispatch(routerActions.setTrackIsLoading());
    const trackPoints = points.join(";");

    const url = `https://trueway-directions2.p.rapidapi.com/FindDrivingRoute?stops=${trackPoints}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ad1fe90187msh5f3705307a9b274p107629jsnbdb8be07eb2c", // в secure environment
        "X-RapidAPI-Host": "trueway-directions2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Не удалось загрузить маршрут. Попробуйте позже");
      }

      const result = await response.json();
      const waypoints = result.route.geometry.coordinates;
      dispatch(routerActions.updateTrack(waypoints || [])); // Возвращаем пустой массив в случае ошибки
    } catch (error) {
      dispatch(routerActions.setError({ message: error }));
    }
  };
};

export { routerActions, routerReducer, fetchRoutes, fetchTrack };
