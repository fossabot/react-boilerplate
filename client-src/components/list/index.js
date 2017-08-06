import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import ListItem from '../list-item';

function List({ data }) {
  const emptyMessage = (
    <p>There&apos;s nothing to see here yet.</p>
  );

  const crudList = (
    <div className="c-list">
      { data.map(item => <ListItem item={item} key={uuidv4()} />) }
    </div>
  );

  return (
    <div>
      {data.length === 0 ? emptyMessage : crudList}
    </div>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
