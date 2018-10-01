import { FETCH_COUNTRIES, NEW_COUNTRY } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_COUNTRY: 
      return {
        ...state,
        item: action.payload
      };
    default: 
      return state;
  }
}