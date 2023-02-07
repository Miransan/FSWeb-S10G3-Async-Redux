import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke, addFavorite } from "../actions/jokesActions";
import { BsHeartFill } from "react-icons/bs";
import { FcNext } from "react-icons/fc";

const JokeList = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes);
  const favorites = useSelector((state) => state.favorites);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    dispatch(fetchJoke());
  }, []);

  const handleAddFavorite = () => {
    const favoriteList = favorites.filter((j) => j.id === jokes.id)[0];
    !favoriteList && dispatch(addFavorite(jokes));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1300);
  };

  return (
    <div>
      <p className="paragraph">
        <i>A good laugh heals a lot of hurts.</i>
        <p>— Madeleine L’Engle</p>
      </p>
      {jokes && (
        <div className="jokes">
          <div className="photo-button">
            <img
              className="dog-photo"
              src="https://media.tenor.com/s2yrU5qoQTIAAAAd/grinning-dog.gifs"
            ></img>
          </div>

          <p className="question" key={jokes.id}>
            {jokes.setup}
          </p>

          <p>{jokes.punchline}</p>
          <button className="like" onClick={handleAddFavorite}>
            Like <BsHeartFill style={{ color: "red" }} />
          </button>
          <button className="next" onClick={() => dispatch(fetchJoke())}>
            Next <FcNext style={{ fontSize: "20px" }} />
          </button>
        </div>
      )}
      {success && (
        <div className="message">
          <p>Added To Your Favorites!</p>
        </div>
      )}
    </div>
  );
};

export default JokeList;