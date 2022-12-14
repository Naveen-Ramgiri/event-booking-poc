import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}
export const store = createStore(reducers, applyMiddleware(...middleware));

export default store;