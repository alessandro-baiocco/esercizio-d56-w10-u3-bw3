import { useSelector } from "react-redux";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";
const URL2 = "https://striveschool-api.herokuapp.com/api/profile/";

export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const EDIT_MY_PROFILE = "EDIT_MY_PROFILE";
export const STOP_LOADING_PROFILE = "STOP_LOADING_PROFILE";
export const GET_MY_EXPERIENCES = "GET_MY_EXPERIENCES";

//! Profile page fetch
export const myProfilePage = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL + "me", {
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_MY_PROFILE, payload: data });
      dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};

//! Profile page method PUT fetch
export const myProfilePageMod = (e, param) => {
  e.preventDefault();
  return async (dispatch, getState) => {
    console.log(param);
    const response = await fetch(URL2, {
      method: "PUT",
      body: JSON.stringify(param),
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      dispatch({ type: EDIT_MY_PROFILE, payload: param });
    }
  };
};

//! Experiences profile page fetch
export const myExperiencesFetch = () => {
  return async (dispatch, getState) => {
    const myProfile = useSelector((state) => state.profile.content);
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + myProfile._id + "/experiences",
      {
        headers: {
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_MY_EXPERIENCES, payload: data });
    }
  };
};
