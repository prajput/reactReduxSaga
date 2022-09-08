import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/index";
import { createStore, applyMiddleware } from "redux";

export default function configureStore(initialState) {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      reducer,
      initialState,
      applyMiddleware(/* other middleware, */ sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run
  };
}
