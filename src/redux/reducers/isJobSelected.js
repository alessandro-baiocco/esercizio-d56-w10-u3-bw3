import { SELECTED_JOB } from "../action";

const initialState = {
  content: "",
};

const jobSelected = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_JOB:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobSelected;
