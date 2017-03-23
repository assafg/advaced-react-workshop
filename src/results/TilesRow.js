import React, { PropTypes } from 'react'
import Tile from './Tile';

class TilesRow extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  render () {
    const { items, onSelect } = this.props;
    return (
      <div className="tile is-12">
        {items.map(item => (
          <Tile key={item.id} item={item} onSelect={onSelect}/>
        ))}
      </div>
    );
  }
}

export default TilesRow;
