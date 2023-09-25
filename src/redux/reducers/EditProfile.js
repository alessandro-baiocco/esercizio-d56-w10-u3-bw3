import { EDIT_MY_PROFILE } from "../action";

const initialState = {
  content: null,
};

const myProfileEdit = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default myProfileEdit;
