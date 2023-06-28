import { put, call } from "redux-saga/effects";
import { getFetchSuccess } from "../features/homeSlice";
import callAPI from "../../services/apiCall";

function* workGetHomeFetch() {
  let url =
    "dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  try {
    let result = yield call(() => callAPI({ url: url, method: "GET" }));
    yield put(getFetchSuccess(result.data.data));
  } catch (e) {
    console.log(e.response);
  }
}

export default workGetHomeFetch;
