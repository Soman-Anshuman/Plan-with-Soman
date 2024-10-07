import React from 'react';

const FilterButtons = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      {/* Filter Buttons */}
      <button onClick={() => onFilterChange('all')} className={filter === 'all' ? 'active all' : 'all'}>All</button>
      <button onClick={() => onFilterChange('east')} className={filter === 'east' ? 'active east' : 'east'}>East</button>
      <button onClick={() => onFilterChange('west')} className={filter === 'west' ? 'active west' : 'west'}>West</button>
      <button onClick={() => onFilterChange('north')} className={filter === 'north' ? 'active north' : 'north'}>North</button>
      <button onClick={() => onFilterChange('south')} className={filter === 'south' ? 'active south' : 'south'}>South</button>
    </div>
  );
};

export default FilterButtons;
