import { takeLatest, all } from "redux-saga/effects";
import workGetHomeFetch from "./homeSaga";

function* sagas() {
  yield all([takeLatest("FETCH_DATA", workGetHomeFetch)]);
}

export default sagas;
