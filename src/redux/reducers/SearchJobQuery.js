import { SEARCH_JOB_QUERY } from "../action";

const initialState = {
  content: "",
};

const jobsQuery = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOB_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobsQuery;
