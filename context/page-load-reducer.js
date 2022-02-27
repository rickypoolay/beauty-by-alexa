import { INITIAL_LOADED, INITIAL_NOT_LOADED } from "./page-load-actions";

const pageLoadReducer = (state, action) => {
  switch (action.type) {
    case INITIAL_LOADED:
      return {
        ...state,
        initialLoad: true,
      };
    case INITIAL_NOT_LOADED:
      return {
        ...state,
        initialLoad: false,
      };
    default:
      return state;
  }
};

export default pageLoadReducer;
