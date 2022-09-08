// import { createStore } from "redux";
// import rootReducer from "../reducers/index";
// const store = createStore(rootReducer);
// export default store;
import configureStore from "./configureStore";
import rootSaga from "../saga/sagas";
// ... other imports

const store = configureStore();
store.runSaga(rootSaga);
export default store;
