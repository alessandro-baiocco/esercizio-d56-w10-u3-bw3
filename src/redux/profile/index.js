import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myProfileResult from "../reducers/profile";
import myProfileEdit from "../reducers/EditProfile";
import stopLoadingProfile from "../reducers/loadingProfileMain";
import myExperiences from "../reducers/Experinces";
import errorProfileMain from "../reducers/errorProfile";
import myExperiencesEdit from "../reducers/EditExperiences";
import myProfileImage from "../reducers/profImage";
import getPosts from "../reducers/GetPosts";

const rootReducer = combineReducers({
  profile: myProfileResult,
  editProfile: myProfileEdit,
  myExperiences: myExperiences,
  loadingProfile: stopLoadingProfile,
  errorProfileMain: errorProfileMain,
  editExperience: myExperiencesEdit,
  profImage: myProfileImage,
  getPosts: getPosts,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
