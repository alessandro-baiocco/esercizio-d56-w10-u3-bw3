import { DELETE_MY_POST, GET_POSTS, MY_NEW_POST } from "../action";

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

    case MY_NEW_POST:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DELETE_MY_POST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default getPosts;
