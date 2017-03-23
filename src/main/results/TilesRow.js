import React, { PropTypes } from 'react'
import Tile from './Tile';

const TilesRow = ({ items, onTileSelect }) => (
  <div className="tile is-12">
    {items.map(item => (
      <Tile key={item.id} item={item} onSelect={onTileSelect}/>
    ))}
  </div>
);

TilesRow.propTypes = {
  items: PropTypes.array,
  onTileSelect: PropTypes.func.isRequired,
};

TilesRow.defaultProps = {
  items: [],
};

export default TilesRow;
