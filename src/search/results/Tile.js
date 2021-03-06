import React from 'react'
import PropTypes from 'prop-types';
import './Tile.css';

const Tile = ({ item, onSelect }) => (
  <div className="tile is-parent">
    <div className="tile is-child">
    <figure className="figure">
      <img
        className="is-3by4 pointer"
        onClick={() => onSelect(item.id)}
        src={item.img}
        alt={item.name}
      />
    </figure>
    <p className="title">{item.name}</p>
    <p className="subtitle">{item.desc}</p>
    </div>
  </div>
);

Tile.propType = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
};

export default Tile;
