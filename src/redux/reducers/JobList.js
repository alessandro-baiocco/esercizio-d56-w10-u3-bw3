import { JOB_SEARCH } from "../action";

const initialState = {
  content: null,
};

const jobsSearch = (state = initialState, action) => {
  switch (action.type) {
    case JOB_SEARCH:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobsSearch;
