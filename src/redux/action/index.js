const URL = "https://striveschool-api.herokuapp.com/api/profile/";
const URL2 = "https://striveschool-api.herokuapp.com/api/profile/";
export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const EDIT_MY_PROFILE = "EDIT_MY_PROFILE";

export const myProfilePage = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL + "me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGU0YzM3NTJhODAwMTQ1Njg3NmQiLCJpYXQiOjE2OTU2MzI5NzIsImV4cCI6MTY5Njg0MjU3Mn0.aUvjIzLRzi_SVt6ngJ9FtFNCNWcrDyY59f0TkzZ9esg",
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_MY_PROFILE, payload: data });
    }
  };
};

export const myProfilePageMod = (e, param) => {
  e.preventDefault();
  return async (dispatch, getState) => {
    console.log(param);
    const response = await fetch(URL2, {
      method: "PUT",
      body: JSON.stringify(param),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGU0YzM3NTJhODAwMTQ1Njg3NmQiLCJpYXQiOjE2OTU2MzI5NzIsImV4cCI6MTY5Njg0MjU3Mn0.aUvjIzLRzi_SVt6ngJ9FtFNCNWcrDyY59f0TkzZ9esg",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      dispatch({ type: EDIT_MY_PROFILE, payload: param });
    }
  };
};