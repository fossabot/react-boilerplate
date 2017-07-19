/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import NewCrudItem from './components/newCrudItem';
import CrudList from './components/crudList';

class App extends Component {
  static propTypes = {
    content: PropTypes.string,
  };

  static defaultProps = {
    content: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      value: 'Such Wow!',
    };
  }

  // Flow types
  state: {
    value: string,
  };

  props: {
    content: string,
  };

  render() {
    return (
      <Router>
        <div>
          <img src="static/img/logo.svg" alt="favicon for site" />
          <ul className="c-nav">
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/list">List</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/new">New</NavLink></li>
          </ul>
          <Route path="/" exact render={() => (<div><img src="static/img/doge.png" alt="Doge" /><p>{this.props.content}</p></div>)} />
          <Route path="/list" component={CrudList} />
          <Route path="/new" component={NewCrudItem} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.content,
  };
}

export default connect(mapStateToProps)(App);