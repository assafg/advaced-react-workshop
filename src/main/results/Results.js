import React from 'react'
import TilesRow from './TilesRow';

const Results = ({searchResults, onTileSelect}) => (
  <div className="tile is-ancestor is-vertical">
      <TilesRow
        items={searchResults}
        onTileSelect={onTileSelect}
      />
  </div>
);

Results.propTypes = {
  searchResults: React.PropTypes.array,
  onTileSelect: React.PropTypes.func,
};

export default Results;
