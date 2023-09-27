import { useSelector } from "react-redux";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";
const URL2 = "https://striveschool-api.herokuapp.com/api/profile/";
const URL3 = "https://striveschool-api.herokuapp.com/api/posts/";
const URLDIPOST = "https://striveschool-api.herokuapp.com/api/posts/";
const URLDILIDIA = "https://barbie-linkedin.cyclic.cloud/api/profile/";

export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const IMAGE_MY_PROFILE = "IMAGE_MY_PROFILE";
export const EDIT_MY_PROFILE = "EDIT_MY_PROFILE";
export const STOP_LOADING_PROFILE = "STOP_LOADING_PROFILE";
export const ERROR_PROFILE_MAIN = "ERROR_PROFILE_MAIN";
export const GET_MY_EXPERIENCES = "GET_MY_EXPERIENCES";
export const MY_NEW_POST = "MY_NEW_POST";
export const EDIT_MY_EXPERIENCES = "EDIT_MY_EXPERIENCES";
export const DELETE_MY_EXPERIENCES = "DELETE_MY_EXPERIENCES";
export const DELETE_MY_POST = "DELETE_MY_EXPERIENCES";
export const POST_MY_EXPERIENCES = "POST_MY_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const GET_SINGLE_POST = "GET_SINGLE_POST";

//! Profile page fetch
export const myProfilePage = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL + "me", {
        headers: {
          // team: "team-4",
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
    const response = await fetch(URL + myProfile + "/experiences", {
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_MY_EXPERIENCES, payload: data });
    }
  };
};

export const myExperiencePageMod = (myProfile, experiences) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL + myProfile + "/experiences/" + experiences._id, {
      method: "PUT",
      body: JSON.stringify(experiences),
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      dispatch({ type: EDIT_MY_EXPERIENCES, payload: experiences });
    }
  };
};
export const myProfileImage = (myProfileId, profileImg) => {
  const formData = new FormData();
  formData.append("profile", profileImg.image);
  return async (dispatch, getState) => {
    const response = await fetch(URL + myProfileId + "/picture", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    });
    if (response.ok) {
      dispatch({ type: IMAGE_MY_PROFILE, payload: profileImg });
    }
  };
};

export const postMyNewExperience = (myProfile, status, statusImage) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL + myProfile + "/experiences", {
      method: "POST",
      body: JSON.stringify(status),
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const formData = new FormData();
      formData.append("experience", statusImage.image);
      const data = await response.json();
      const imgresponse = await fetch(URL + myProfile + "/experiences/" + data._id + "/picture", {
        method: "POST",

        body: formData,

        headers: {
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (imgresponse.ok) {
        dispatch({ type: POST_MY_EXPERIENCES, payload: status });
        dispatch(myExperiencesFetch(myProfile));
        console.log("andato a buon fine");
      }
    }
  };
};

export const deleteMyExperiences = (myProfile, myExpId) => {
  return async (dispatch, getState) => {
    // try {
    const response = await fetch(URL + myProfile._id + "/experiences/" + myExpId, {
      method: "DELETE",
      headers: {
        // team: "team-4",
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: DELETE_MY_EXPERIENCES, payload: myExpId });
    }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   console.log("error");
    //   dispatch(myExperiencesFetch(myProfile));
    // }
  };
};

export const getPostsFetch = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL3, {
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_POSTS, payload: data });
      dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};

export const postMyNewBeatifulPost = (text) => {
  return async (dispatch, getState) => {
    const response = await fetch(URLDIPOST, {
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: MY_NEW_POST, payload: data });
    }
  };
};

export const putMyBeatifulPost = (postId, text) => {
  return async (dispatch, getState) => {
    const response = await fetch(URLDIPOST + postId, {
      method: "PUT",
      body: JSON.stringify(text),
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // const data = await response.json();
      // dispatch({ type: GET_SINGLE_POST, payload: data });
    }
  };
};
export const deleteMyBeatifulPost = (postId) => {
  return async (dispatch, getState) => {
    const response = await fetch(URLDIPOST + postId, {
      method: "DELETE",
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // const data = await response.json();
      // dispatch({ type: GET_SINGLE_POST, payload: data });
    }
  };
};
