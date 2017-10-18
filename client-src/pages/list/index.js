import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../../components/list';

class ListPage extends Component {
  static propTypes = {
    listContent: PropTypes.array,
  };

  static defaultProps = {
    listContent: [],
  };

  render() {
    return (
      <List data={this.props.listContent} />
    );
  }
}

function mapStateToProps(state) {
  return {
    listContent: state.listContentReducer,
  };
}

export default connect(mapStateToProps)(ListPage);
