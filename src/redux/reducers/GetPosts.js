import { GET_POSTS } from "../action";

const initialState = {
  content: [],
};

const getPosts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default getPosts;
