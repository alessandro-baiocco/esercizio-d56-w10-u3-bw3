import { GET_MY_EXPERIENCES } from "../action";

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

    default:
      return state;
  }
};
export default myExperiences;
