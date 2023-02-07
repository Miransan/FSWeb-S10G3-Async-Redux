import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "../App.css";
import JokeList from "./JokesList";
import FavoritesList from "./FavoritesList";

function App() {
  return (
    <>
      <div className="header">
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          {" "}
          <h1>Give it a laugh!</h1>
        </Link>
        <Link
          to="/favorites"
          style={{
            color: "black",
            textDecoration: "none",
            backgroundColor: "rgba(137, 172, 39, 0.41)",
            padding: "10px",
          }}
        >
          Check Your Favorite Ones!
        </Link>
      </div>
      <div className="App">
        <Route exact path="/" component={JokeList} />
      </div>
      <Switch>
        <Route path="/favorites" component={FavoritesList} />
      </Switch>
    </>
  );
}

export default App;