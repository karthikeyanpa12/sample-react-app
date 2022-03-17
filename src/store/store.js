import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  return createStore(rootReducers, composeEnhancers(applyMiddleware()));
}

export default configureStore;
