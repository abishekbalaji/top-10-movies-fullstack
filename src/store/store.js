import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const enhancedCompose =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = enhancedCompose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
