import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import ListPage from './pages/list';

export default class App extends Component {
  static propTypes = {
    content: PropTypes.string,
  };

  static defaultProps = {
    content: 'Such',
  };

  constructor(props) {
    super(props);

    this.state = {
      value: 'Wow!',
    };
  }

  render() {
    return (
      <Router>
        <div>
          <img src="static/img/logo.svg" alt="favicon for site" />
          <ul className="c-nav">
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/list">List</NavLink></li>
          </ul>
          <Switch>
            <Route path="/" exact render={() => (<div><img src="static/img/doge.png" alt="Doge" /><p>{this.props.content} {this.state.value}</p></div>)} />
            <Route path="/list" component={ListPage} />
            <Route render={() => (<p>This page does not exist</p>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}
