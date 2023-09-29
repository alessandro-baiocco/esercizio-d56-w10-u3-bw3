import { FAVOURITE_JOB, REMOVE_FAVOURITE_JOB } from "../action";

const initialState = {
  content: [],
};

const favouriteJob = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITE_JOB:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVOURITE_JOB:
      return {
        ...state,
        content: state.content.filter((job) => job !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteJob;
