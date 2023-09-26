import { IMAGE_MY_PROFILE } from "../action";

const initialState = {
  content: null,
};

const myProfileImage = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_MY_PROFILE:
      return {
        ...state,
        content: { ...state.content, image: action.payload },
      };

    default:
      return state;
  }
};

export default myProfileImage;
