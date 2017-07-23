import React from 'react';
import PropTypes from 'prop-types';

function DataItem({ item }) {
  return (
    <li id={item.id}>{item.name} | {item.surname} | {item.region} </li>
  );
}

DataItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DataItem;
