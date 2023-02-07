import { useSelector, useDispatch } from "react-redux";
import { FaRegSmileBeam } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { removeFavorite } from "../actions/jokesActions";

import React from "react";

function FavoritesList() {
  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        The Ones We Made You Smile
      </h5>

      <div className="favoritelist">
        {" "}
        {favorites.map((joke) => {
          return (
            <div key={joke.id}>
              <ul>
                <li
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  {joke.setup}{" "}
                  <span>
                    <CiCircleRemove
                      onClick={() => {
                        dispatch(removeFavorite(joke.id));
                      }}
                      style={{
                        fontSize: "35px",
                        float: "right",
                        cursor: "pointer",
                      }}
                    />
                  </span>
                </li>
              </ul>

              <p>
                — {joke.punchline} <FaRegSmileBeam />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavoritesList;