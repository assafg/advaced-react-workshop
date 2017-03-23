import React from 'react'
import TilesRow from './TilesRow';
import { searchResults } from './mock_data';

const Results = ({ searchResults, onTileSelect }) => (
  <div className="tile is-ancestor is-vertical">
      <TilesRow items={searchResults} onSelect={onTileSelect/>
  </div>
);

Results.propTypes = {
  searchResults: PropTypes.array,
  onTileSelect: PropTypes.array,
}

export default Results;
