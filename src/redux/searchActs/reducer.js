import { SEARCH_RESET, SEARCH_SEARCHING } from './index';


const initialState = { text: '', loading: false };

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case SEARCH_RESET:
      return { ...initialState, loading: true };

    case SEARCH_SEARCHING:
      return {
        ...state,
        loading: false,
        text: action.text
      };

    default:
      return state;
  }
};
