import { NOT_FAVOURITE_JOB, REMOVE_NOT_FAVOURITE_JOB } from "../action";

const initialState = {
  content: [],
};

const notFavouriteJob = (state = initialState, action) => {
  switch (action.type) {
    case NOT_FAVOURITE_JOB:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_NOT_FAVOURITE_JOB:
      return {
        ...state,
        content: state.content.filter((job) => job !== action.payload),
      };
    default:
      return state;
  }
};

export default notFavouriteJob;
