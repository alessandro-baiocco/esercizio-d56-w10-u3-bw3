import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myProfileResult from "../reducers/profile";
import myProfileEdit from "../reducers/EditProfile";
import stopLoadingProfile from "../reducers/loadingProfileMain";

const rootReducer = combineReducers({
  profile: myProfileResult,
  editProfile: myProfileEdit,
  loadingProfile: stopLoadingProfile,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
