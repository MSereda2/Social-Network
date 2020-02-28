import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger), );

export default store;

// applyMiddleware(...middleware)