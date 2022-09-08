import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUserApi } from "../api/apis.js";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(fetchUserApi, "");
    yield put({ type: "GET_ARTICLE_SUCCEEDED", user: user.data });
  } catch (e) {
    yield put({ type: "GET_ARTICLE_FAILED", message: e.message });
  }
}

function* mySaga() {
  // yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeLatest("GET_ARTICLE", fetchUser);
}

export default mySaga;
