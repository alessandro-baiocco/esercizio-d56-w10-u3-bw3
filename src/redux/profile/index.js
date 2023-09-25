import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myProfileResult from "../reducers/profile";

const rootReducer = combineReducers({
  profile: myProfileResult,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
