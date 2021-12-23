import { createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose } from "redux";

import usersReducer from "../reducers/userReducer";
import supplyReducer from "../reducers/supplyReducer";

const reducers = combineReducers({
  users: usersReducer,
  supply: supplyReducer,
});

const store = compose(applyMiddleware(thunk))(createStore)(reducers);

export default store;
