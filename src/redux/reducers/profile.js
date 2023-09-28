import { EDIT_MY_PROFILE, GET_MY_PROFILE, IMAGE_MY_PROFILE } from "../action";

const initialState = {
  content: null,
};

const myProfileResult = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    case EDIT_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    case IMAGE_MY_PROFILE:
      return {
        ...state,
        content: { ...state.content, image: action.payload },
      };

    default:
      return state;
  }
};

export default myProfileResult;
