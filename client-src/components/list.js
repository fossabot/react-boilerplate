import React from 'react';
import PropTypes from 'prop-types';
import DataItem from './dataItem';

function List({ data }) {
  const emptyMessage = (
    <p>There&apos;s nothing to see here yet.</p>
  );

  const crudList = (
    <div className="list">
      { data.map(item => <DataItem item={item} key={Math.random()} />) }
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
