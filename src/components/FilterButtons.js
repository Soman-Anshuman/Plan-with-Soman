import React from 'react';

const FilterButtons = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      {/* Filter Buttons */}
      <button onClick={() => onFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => onFilterChange('east')} className={filter === 'east' ? 'active' : ''}>East</button>
      <button onClick={() => onFilterChange('west')} className={filter === 'west' ? 'active' : ''}>West</button>
      <button onClick={() => onFilterChange('north')} className={filter === 'north' ? 'active' : ''}>North</button>
      <button onClick={() => onFilterChange('south')} className={filter === 'south' ? 'active' : ''}>South</button>
    </div>
  );
};

export default FilterButtons;