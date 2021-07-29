import {
  GET_USERS,
  SET_USERS,
  SET_SDATA,
  SET_DATA,
  R_DATA,
  SR_DATA,
} from "../Redux-Saga/Action";
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import SagaTHead from "./SagaTHead";
import SagaTHeadLog from "./SagaTHeadLog";

export function* GetUsers() {
  console.log("Inside watchGetUsers");
  yield takeEvery(GET_USERS, workerGetUser);
  yield takeEvery(SET_SDATA, titleurl);
  yield takeEvery(SR_DATA, removedata);
}

export function* workerGetUser() {
  console.log("Inside workerGetUsers");
  const uri = "https://jsonplaceholder.typicode.com/users";
  const result = yield call(axios.get, uri);
  console.log("data's", result.data);
  yield put({ type: SET_USERS, value: result.data, ltable: <SagaTHeadLog /> });
}
export function* titleurl() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const ans = yield call(axios.get, url);
  console.log("data's", ans.data);
  yield put({ type: SET_DATA, value1: ans.data, utable: <SagaTHead /> });
}
export function* removedata() {
  yield put({ type: R_DATA });
}
