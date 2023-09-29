import { useSelector } from "react-redux";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";
const URL2 = "https://striveschool-api.herokuapp.com/api/profile/";
const URL3 = "https://striveschool-api.herokuapp.com/api/posts/";
const URLDIPOST = "https://striveschool-api.herokuapp.com/api/posts/";
const URLJOBS = "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10";
const URLSEARCHJOBS = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
const URLCOMPANYJOBS = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
const URLDILIDIA = "https://barbie-linkedin.cyclic.cloud/api/profile/";
const companyArr = ["sport", "web", "parrot"];
const randomString = companyArr[Math.floor(Math.random() * companyArr.length)];

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
export const DELETE_MY_POST = "DELETE_MY_POST";
export const POST_MY_EXPERIENCES = "POST_MY_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const GET_SINGLE_POST = "GET_SINGLE_POST";
export const GET_JOBS = "GET_JOBS";
export const SEARCH_JOB_QUERY = "SEARCH_JOB_QUERY";
export const GET_JOBS_BY_COMPANY = "GET_JOBS_BY_COMPANY";
export const JOB_SEARCH = "JOB_SEARCH";
export const FAVOURITE_JOB = "FAVOURITE_JOB";
export const REMOVE_FAVOURITE_JOB = "REMOVE_FAVOURITE_JOB";
export const NOT_FAVOURITE_JOB = "NOT_FAVOURITE_JOB";
export const REMOVE_NOT_FAVOURITE_JOB = "REMOVE_NOT_FAVOURITE_JOB";
export const SELECTED_JOB = "SELECTED_JOB";

//! Profile page fetch------------------------------------------------------------------------------------------------------------------
export const myProfilePage = (userId = "me") => {
  return async (dispatch, getState) => {
    dispatch({ type: ERROR_PROFILE_MAIN, payload: false });
    try {
      const response = await fetch(URL + userId, {
        headers: {
          // team: "team-4",
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: EDIT_MY_PROFILE, payload: data });
        dispatch(myExperiencesFetch(data._id));
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

//! Profile page method PUT fetch---------------------------------------------------------------------------------------------------------------
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

//! Experiences profile page fetch-------------------------------------------------------------------------------------------------------------------------
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
      dispatch({ type: DELETE_MY_EXPERIENCES, payload: experiences._id });
      dispatch({ type: POST_MY_EXPERIENCES, payload: experiences });
    }
  };
};

//imagine profilo fetch -------------------------------------------------------------------------------------------------------------------------
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
      const dataImg = await response.json();
      dispatch({ type: IMAGE_MY_PROFILE, payload: dataImg.image });
    }
  };
};

//posta le exp ----------------------------------------------------------------------------------------------------------------------------

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

// CANCEL ? le exp --------------------------------------------------------------------------------------------------------------------------
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

//becca le exp ----------------------------------------------------------------------------------------------------------------------
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

//posta i miei bellisimi post -----------------------------------------------------------------------------------------------------------------
export const postMyNewBeatifulPost = (text, image = "", user) => {
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
      data.user = {
        name: user.name,
        surname: user.surname,
        image: user.image,
        title: user.title,
      };
      if (image !== "") {
        const formData = new FormData();
        formData.append("post", image.image);
        const imgresponse = await fetch(URLDIPOST + data._id, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: process.env.REACT_APP_AUTHORIZATION,
          },
        });
        if (imgresponse.ok) {
          console.log("user", user, data, text);
          const dataImg = await imgresponse.json();
          data.image = await dataImg.image;
        }
        dispatch({ type: MY_NEW_POST, payload: data });
      } else {
        dispatch({ type: MY_NEW_POST, payload: data });
      }
    }
  };
};

// modifica i miei bellissimi post---------------------------------------------------------------------------------------------

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

// cancella i miei bellissimi post (no , ti prego non farlo)----------------------------------------------------------------------------------------
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

//  get lavoro (barbone)----------------------------------------------------------------------------------------------------------------
export const getJobsFetch = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URLJOBS, {
        headers: {
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const results = await data.data;
        dispatch({ type: GET_JOBS, payload: results });
        // dispatch({ type: STOP_LOADING_PROFILE, payload: false });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};

//get compagnia --------------------------------------------------------------------------------------------------------------------
export const getCompanyJobsFetch = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URLCOMPANYJOBS + randomString, {
        headers: {
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const results = await data.data;
        dispatch({ type: GET_JOBS_BY_COMPANY, payload: results });
        // dispatch({ type: STOP_LOADING_PROFILE, payload: false });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};

//ricerca del lavoro-----------------------------------------------------------------------------------------------------------------

export const jobquery = (query) => {
  return (dispatch, getState) => {
    dispatch({ type: SEARCH_JOB_QUERY, payload: query });
  };
};

export const jobSearch = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URLSEARCHJOBS + query + "&limit=40", {
        headers: {
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const results = await data.data;
        dispatch({ type: JOB_SEARCH, payload: results });
        // dispatch({ type: STOP_LOADING_PROFILE, payload: false });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};
