import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/userReducers"; // Replace with your actual root reducer

const middleware = [thunk]; // Add any middleware you need

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
