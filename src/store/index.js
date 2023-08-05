import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

// подключаем devtools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// запускаем основную сагу
sagaMiddleware.run(rootSaga);

export default store;
