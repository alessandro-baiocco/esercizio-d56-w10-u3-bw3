import { async } from "q";
import { useDispatch } from "react-redux";
const URL = "https://striveschool-api.herokuapp.com/api/profile/";
export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";

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
      console.log(data);
    }
  };
};
