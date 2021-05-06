import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route path="/" component={ Home }></Route>
      </BrowserRouter>
    );
  }
}

export default App;
