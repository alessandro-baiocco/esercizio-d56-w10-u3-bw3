import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  profile: profileResult,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
