import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  return createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;
