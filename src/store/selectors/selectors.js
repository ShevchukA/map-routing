const selectRoutesLoadingStatus = (store) => {
  return store.router.routesIsLoading;
};

const selectRoutes = (store) => {
  return store.router.routes;
};

const selectTrackLoadingStatus = (store) => {
  return store.router.trackIsLoading;
};

const selectCurrentRoute = (store) => {
  return store.router.selectedRoute;
};

const selectCurrentTrack = (store) => {
  return store.router.track;
};

export {
  selectRoutesLoadingStatus,
  selectRoutes,
  selectTrackLoadingStatus,
  selectCurrentRoute,
  selectCurrentTrack,
};
