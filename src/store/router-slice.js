import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: {
    routes: [],
    selectedRoute: null,
    track: null,
    trackIsLoading: true,
    routesIsLoading: true,
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
      alert(error);
    }
  };
};

// thunk для получения данных по треку
const fetchTrack = (points) => {
  return async (dispatch) => {
    dispatch(routerActions.setTrackIsLoading());
    const trackPoints = points.join(";");
    console.log(trackPoints);
    // const trackPoints = "38.716615,-9.137262;38.714451,-9.152471";
    try {
      const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${trackPoints}?overview=false`
      );

      if (!response.ok) {
        throw new Error("Не удалось загрузить маршрут. Попробуйте позже");
      }

      const data = await response.json();
      console.log(data.waypoints);

      const waypoints = data.waypoints.map((waypoint) => {
        return waypoint.location;
      });

      dispatch(routerActions.updateTrack(waypoints || null)); // возвращаем null в случае ошибки
    } catch (error) {
      alert(error);
    }
  };
};

export { routerActions, routerReducer, fetchRoutes, fetchTrack };
