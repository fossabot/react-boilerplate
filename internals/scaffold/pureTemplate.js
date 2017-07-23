module.exports = function (name) { return (`import React from 'react';
import PropTypes from 'prop-types';

function ${name}({ text }) {
  return (
    <div>{text}</div>
  );
}

${name}.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ${name};
`)};
