import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import TestComponent from '../components/testComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Hello; World',
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/new">New</Link>
          <Link to="/component">Component</Link>
          <Route path="/" exact render={() => (<div>{this.state.value}</div>)} />
          <Route path="/new" render={() => (<div>This is New</div>)} />
          <Route path="/component" component={TestComponent} />
        </div>
      </Router>
    );
  }
}
