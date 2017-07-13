import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import List from './list';

class CrudList extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    testCrud: PropTypes.array.isRequired,
  };

  static defaultProps = {
    testCrud: [],
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <List data={this.props.testCrud} />
    );
  }
}

function mapStateToProps(state) {
  return {
    testCrud: state.testCrud,
  };
}

export default connect(mapStateToProps, { fetchData })(CrudList);
