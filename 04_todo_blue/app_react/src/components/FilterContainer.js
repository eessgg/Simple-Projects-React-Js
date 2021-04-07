import React from 'react';

const FilterContainer = ({name, setFilter}) => {
  return (
    <button type="button" onClick={() => setFilter(name)}>{name}</button>
  );
}

export default FilterContainer;
