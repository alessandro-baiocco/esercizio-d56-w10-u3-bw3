import { STOP_LOADING_PROFILE } from "../action";

const initialState = {
  content: true,
};

const stopLoadingProfile = (state = initialState, action) => {
  switch (action.type) {
    case STOP_LOADING_PROFILE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default stopLoadingProfile;
