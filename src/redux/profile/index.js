import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myProfileResult from "../reducers/profile";
import myProfileEdit from "../reducers/EditProfile";
import stopLoadingProfile from "../reducers/loadingProfileMain";
import myExperiences from "../reducers/Experinces";

const rootReducer = combineReducers({
  profile: myProfileResult,
  editProfile: myProfileEdit,
  myExperiences: myExperiences,
  loadingProfile: stopLoadingProfile,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
