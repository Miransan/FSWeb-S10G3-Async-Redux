import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { likeFact } from "./reduxStuff";

export default function Main() {
  const [fact, setFact] = useState("");
  const myDispatch = useDispatch();

  function factGetir() {
    axios
      .get("https://catfact.ninja/fact")
      .then(response => {
        if (response.status === 200) {
          setFact(response.data.fact)
        }
      })
  }

  useEffect(() => {
    factGetir();
  }, []);

  function handleBegen() {
    myDispatch(likeFact(fact));
  }

  return (
    <div>
      <div className='fact'>
        <p>{fact}</p>
      </div>
      <div className='fact-buttons'>
        <button onClick={handleBegen}>Like</button>
        <button onClick={factGetir}>New Item</button>
      </div>
    </div>
  )
}

