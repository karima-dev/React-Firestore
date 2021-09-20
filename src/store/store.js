import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from './rootSaga'
const sagaMidllware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMidllware))
);

sagaMidllware.run(rootSaga)
export default store;
