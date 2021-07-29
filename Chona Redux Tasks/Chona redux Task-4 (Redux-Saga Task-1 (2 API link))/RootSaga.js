import { all } from "@redux-saga/core/effects";
import { GetUsers } from "./Users";

export default function* rootSaga() {
  yield all([GetUsers()]);
}
