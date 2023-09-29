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

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import favouriteJob from "../reducers/FavouriteJob";
import notFavouriteJob from "../reducers/NotFavourite";
import jobSelected from "../reducers/isJobSelected";

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
  favouriteJob: favouriteJob,
  notFavouriteJob: notFavouriteJob,
  selectedJob: jobSelected,
});

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const profileResult = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(profileResult);
