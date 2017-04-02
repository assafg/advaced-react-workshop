import React from 'react';
import Search from './Search';

const Header = (props) => (
  <div className="level">
    <Search {...props} />
  </div>
);

export default Header;
