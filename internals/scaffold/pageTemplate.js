module.exports = function (name) { return (`import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ${name}Page extends Component {
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

  render() {
    const {
      text,
    } = this.props;

    const {
      stateBool,
    } = this.state;

    return (
      <div>{text}</div>
    );
  }
}
`)};
