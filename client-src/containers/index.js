import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import TestComponent from '../components/testComponent';

class App extends Component {
  static propTypes = {
    content: PropTypes.string,
  };

  static defaultProps = {
    content: '',
  }

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
          <Route path="/" exact render={() => (<div>{this.props.content}</div>)} />
          <Route path="/new" render={() => (<div>This is New</div>)} />
          <Route path="/component" component={TestComponent} />
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
