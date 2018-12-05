import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import LandingPage from './components/landingPage/LandingPage';
import Templates from './components/login/Templates';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/templates" component={Templates} />
        </div>
      </Router>
    );
  }
}

export default App;
