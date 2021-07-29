import * as redux from "redux";
import reduxSaga from "redux-saga";
import { rootReducer } from "./Redux-Saga2/Reducers2";
import rootSaga from "./Redux-Saga2/RootSaga2";

export const myStore = () => {
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
