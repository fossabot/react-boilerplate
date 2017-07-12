import React from 'react';
import PropTypes from 'prop-types';

const ListRequiredProps = {
  data: PropTypes.array.isRequired,
};

function List({ data }) {
  const emptyMessage = (
    <p>There&apos;s nothing to see here yet.</p>
  );

  const crudList = (
    <p>List of CRUD</p>
  );

  return (
    <div>
      {data.length === 0 ? emptyMessage : crudList}
    </div>
  );
}

List.propTypes = ListRequiredProps;

export default List;
