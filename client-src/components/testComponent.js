import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TestComponent extends Component {
  static propTypes = {
    testCrud: PropTypes.array.isRequired,
  };

  static defaultProps = {
    testCrud: [],
  }

  render() {
    return (
      <div>I am the component</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    testCrud: state.testCrud,
  };
}

export default connect(mapStateToProps)(TestComponent);
