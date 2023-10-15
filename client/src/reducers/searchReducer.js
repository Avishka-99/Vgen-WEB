// reducer.js
import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchResults: action.results,
      };
    default:
      return state;
  }
};

export default searchReducer;

