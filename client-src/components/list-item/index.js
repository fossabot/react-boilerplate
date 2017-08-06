import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ item }) {
  return (
    <li className="c-list-item" id={item.id}>{item.name} | {item.surname} | {item.region} </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
