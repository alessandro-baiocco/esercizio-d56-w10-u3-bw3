import { EDIT_MY_EXPERIENCES } from "../action";

const initialState = {
  content: null,
};

const myExperiencesEdit = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MY_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default myExperiencesEdit;
