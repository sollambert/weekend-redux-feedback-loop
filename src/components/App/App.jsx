import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Submit from '../Submit/Submit';
import Admin from '../Admin/Admin';
import Success from '../Success/Success';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
      </header>
        <Router>
          <Route exact path="/">
            <Feeling/>
          </Route>
          <Route exact path="/support">
            <Support/>
          </Route>
          <Route exact path="/understanding">
            <Understanding/>
          </Route>
          <Route exact path="/comments">
            <Comments/>
          </Route>
          <Route exact path="/submit">
            <Submit/>
          </Route>
          <Route exact path="/admin">
            <Admin/>
          </Route>
          <Route exact path="/success">
            <Success/>
          </Route>
        </Router>
    </div>
  );
}

export default App;
