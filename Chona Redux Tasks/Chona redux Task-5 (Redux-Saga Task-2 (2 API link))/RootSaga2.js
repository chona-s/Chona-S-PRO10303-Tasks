import { all } from "@redux-saga/core/effects";
import { GetUsers } from "./SagaPage2";

export default function* rootSaga() {
  yield all([GetUsers()]);
}
