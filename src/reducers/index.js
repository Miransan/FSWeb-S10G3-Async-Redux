import { FETCH_JOKE } from "../actions/jokesActions";
import { ADD_FAVORITE } from "../actions/jokesActions";
import { REMOVE_FAVORITE } from "../actions/jokesActions";

const initialState = {
  jokes: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return { ...state, jokes: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;