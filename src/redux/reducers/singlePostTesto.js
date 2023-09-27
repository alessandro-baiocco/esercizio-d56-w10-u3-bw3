import { GET_SINGLE_POST } from "../action";

const initialState = {
  content: null,
};

const singlePostText = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_POST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default singlePostText;
