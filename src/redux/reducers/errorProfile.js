import { ERROR_PROFILE_MAIN } from "../action";

const initialState = {
  content: false,
};

const errorProfileMain = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_PROFILE_MAIN:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default errorProfileMain;
