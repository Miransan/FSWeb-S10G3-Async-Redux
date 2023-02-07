
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dislikeFact } from "./reduxStuff";

export default function Liked() {
  const likedFacts = useSelector(store => store.likedFacts);
  const dispatch = useDispatch();

  return (
  
      <ul className="liked-list">
        {likedFacts.map(item => (
          <li key={item.id}>
            {item.yazi}
            <button onClick={() => dispatch(dislikeFact(item.id))}>Dislike</button>
          </li>
        ))}
      </ul>
  )
}