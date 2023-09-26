import { useSelector } from "react-redux";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";
const URL2 = "https://striveschool-api.herokuapp.com/api/profile/";
const URLDIRISERVA = "https://barbie-linkedin.cyclic.cloud/api/profile/";

export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const EDIT_MY_PROFILE = "EDIT_MY_PROFILE";
export const STOP_LOADING_PROFILE = "STOP_LOADING_PROFILE";
export const ERROR_PROFILE_MAIN = "ERROR_PROFILE_MAIN";
export const GET_MY_EXPERIENCES = "GET_MY_EXPERIENCES";
export const DELETE_MY_EXPERIENCES = "DELETE_MY_EXPERIENCES";

//! Profile page fetch
export const myProfilePage = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URLDIRISERVA + "me", {
        headers: {
          team: "team-4",
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_MY_PROFILE, payload: data });
      } else {
        dispatch({ type: ERROR_PROFILE_MAIN, payload: true });
        throw new Error();
      }
    } catch (error) {
      dispatch({ type: ERROR_PROFILE_MAIN, payload: true });
      console.log(error);
    } finally {
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
export const myExperiencesFetch = (myProfile) => {
  return async (dispatch, getState) => {
    const response = await fetch(URLDIRISERVA + myProfile + "/experiences", {
      headers: {
        team: "team-4",
        // Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_MY_EXPERIENCES, payload: data });
    }
  };
};
