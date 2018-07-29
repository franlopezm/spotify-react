export const SEARCH_RESET = 'SEARCH_RESET';
export const SEARCH_SEARCHING = 'SEARCH_SEARCHING';


const reset = () => dispatch => dispatch({ type: SEARCH_RESET });

const search = text => dispatch => dispatch({
  type: SEARCH_SEARCHING,
  text
});


export default {
  reset,
  search
};
