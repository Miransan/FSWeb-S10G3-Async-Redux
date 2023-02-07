import { createStore } from "redux";

const baslangicVerisi = {
  likedFacts: []
};

const LIKE = "like";
const DISLIKE = "dislike";

// initial state
// reducer

const myReducer = (state = baslangicVerisi, eylem) => {
  switch (eylem.type) {
    case LIKE:
      return {
        ...state,
        likedFacts: [...state.likedFacts, eylem.payload]
      }
    case DISLIKE:
      const newLikeds = state.likedFacts.filter(item => item.id !== eylem.payload);
      return {
        ...state,
        likedFacts: newLikeds
      }

    default:
      return state;
  }
}

export function likeFact(fact) {
  return {
    type: LIKE,
    payload: {
      id: Date.now(),
      yazi: fact
    }
  }
}

export function dislikeFact(factId) {
  return {
    type: DISLIKE,
    payload: factId
  }
}



const depo = createStore(myReducer);

export default depo;