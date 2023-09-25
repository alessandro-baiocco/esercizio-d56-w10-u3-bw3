import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myProfileResult from "../reducers/profile";
import myProfileEdit from "../reducers/EditProfile";

const rootReducer = combineReducers({
  profile: myProfileResult,
  editProfile: myProfileEdit,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
