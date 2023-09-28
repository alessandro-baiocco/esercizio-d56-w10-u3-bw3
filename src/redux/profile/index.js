import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myProfileResult from "../reducers/profile";

import stopLoadingProfile from "../reducers/loadingProfileMain";
import myExperiences from "../reducers/Experinces";
import errorProfileMain from "../reducers/errorProfile";
import myExperiencesEdit from "../reducers/EditExperiences";
import myProfileImage from "../reducers/profImage";
import getPosts from "../reducers/GetPosts";
import singlePostText from "../reducers/singlePostTesto";
import getJobs from "../reducers/GetJobsReducer";
import jobsQuery from "../reducers/SearchJobQuery";
import jobsSearch from "../reducers/JobList";

const rootReducer = combineReducers({
  profile: myProfileResult,

  myExperiences: myExperiences,
  loadingProfile: stopLoadingProfile,
  errorProfileMain: errorProfileMain,
  editExperience: myExperiencesEdit,
  profImage: myProfileImage,
  getPosts: getPosts,
  getSinglePost: singlePostText,
  getJobs: getJobs,
  jobsQuery: jobsQuery,
  jobSearch: jobsSearch,
});

export const profileResult = configureStore({
  //reducer
  reducer: rootReducer,
});
