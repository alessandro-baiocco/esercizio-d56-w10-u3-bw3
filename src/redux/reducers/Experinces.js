import { GET_MY_EXPERIENCES } from "../action";
import { DELETE_MY_EXPERIENCES } from "../action";
import { POST_MY_EXPERIENCES } from "../action";

const initialState = {
  content: [],
};

const myExperiences = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };

    case DELETE_MY_EXPERIENCES:
      return {
        ...state,
        content: state.content.filter((exp) => exp._id !== action.payload),
      };

    case POST_MY_EXPERIENCES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    default:
      return state;
  }
};

export default myExperiences;
