export const FETCH_JOKE = "FETCH_JOKE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const fetchJoke = () => {
  return (dispatch) => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_JOKE, payload: data });
      });
  };
};

export const addFavorite = (joke) => {
  return { type: ADD_FAVORITE, payload: joke };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};