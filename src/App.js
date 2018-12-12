import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import LandingPage from './components/landingPage/LandingPage';
import Templates from './components/templates/Templates';
import Container from './components/login/Container';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/templates" component={Templates} />
          <Route path="/login" component={Container} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
