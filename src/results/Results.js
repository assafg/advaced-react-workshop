import React from 'react'
import TilesRow from './TilesRow';
import { searchResults } from './mock_data';

class Results extends React.Component {

  onTileSelect(itemId) {
    console.log('selected item: ', itemId);
  }

  render () {
    return (
      <div className="tile is-ancestor is-vertical">
          <TilesRow items={searchResults} onSelect={this.onTileSelect}/>
      </div>
    )
  }
}

export default Results;
