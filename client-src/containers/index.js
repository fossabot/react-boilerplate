import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Flag, Segment } from 'semantic-ui-react';
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
          <img src="static/img/doge.png" alt="favicon for site" />
          <Segment>
            <Flag name="ae" />
            <Flag name="france" />
            <Flag name="myanmar" />
          </Segment>
          <ul className="c-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">New</Link></li>
            <li><Link to="/component">Component</Link></li>
          </ul>
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
