import React from 'react';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import Main from "./Main";
import Liked from './Liked';

function App() {

  return (
    <div className="App">
      <div className="container">
        <section className="content">
          <nav className='navs'>
            <NavLink className="menumuz" activeClassName="selected" to="/" exact>Random</NavLink>
            <NavLink className="menumuz" activeClassName="selected" to="/liked">Likes</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/liked" component={Liked} />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;