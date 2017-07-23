module.exports = function (name) { return (`/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ${name} extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Hello; World',
  };

  constructor(props) {
    super(props);

    this.state = {
      stateBool: true,
    };
  }

  // Flow
  state: {
    value: string,
  };

  props: {
    content: string,
  };

  handleOnClick = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      text,
    } = this.props;

    const {
      stateBool,
    } = this.state;

    return (
      <button onClick={this.handleOnClick}>{text}</button>
    );
  }
}
`)};
