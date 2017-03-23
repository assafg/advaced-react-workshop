import React from 'react';
import Search from './Search';
import LoginToggle from './LoginToggle';

const Header = (props) => (
  <div className="level">
    <Search {...props} />
    <LoginToggle {...props} />
  </div>
);

export default Header;
