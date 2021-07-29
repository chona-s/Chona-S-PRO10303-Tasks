import * as redux from "redux";
import reduxSaga from "redux-saga";
import { rootReducer } from "./Redux-Saga/RootReducers";
import rootSaga from "./Redux-Saga/RootSaga";

export const getStore = () => {
  const initialState = {};
  const reduxSagaMiddleWare = reduxSaga();
  const store = redux.createStore(
    rootReducer,
    initialState,
    redux.applyMiddleware(reduxSagaMiddleWare)
  );
  reduxSagaMiddleWare.run(rootSaga);
  return store;
};
