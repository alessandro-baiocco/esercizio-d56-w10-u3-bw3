import { GET_PROFILE } from "../action";

const initialState = {
  content: null,
};

const profileResult = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        content: [action.payload],
      };

    default:
      return state;
  }
};

export default profileResult;
