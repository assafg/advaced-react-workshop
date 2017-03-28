import React from 'react'
import TilesRow from './TilesRow';

const chunkRows = (array) => {
  if (!array) {
    return [];
  }
  const res = [];
  let i, j, chunk = 5;
  for (i = 0, j = array.length; i < j; i += chunk) {
      res.push(array.slice(i,i+chunk));
  }
  return res;
}

const Results = ({searchResults, onTileSelect}) => (
  <div className="tile is-ancestor is-vertical">
      {chunkRows(searchResults).map((chunk, i) => (
        <TilesRow
          key={`row-${i}`}
          items={chunk}
          onTileSelect={onTileSelect}
        />
      ))}
  </div>
);

Results.propTypes = {
  searchResults: React.PropTypes.array,
  onTileSelect: React.PropTypes.func,
};

export default Results;
