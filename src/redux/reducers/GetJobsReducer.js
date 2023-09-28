import { GET_JOBS, GET_JOBS_BY_COMPANY } from "../action";

const initialState = {
  content: [],
  company: null,
};

const getJobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case GET_JOBS_BY_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    default:
      return state;
  }
};

export default getJobs;
