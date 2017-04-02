import React, { PropTypes } from 'react';

const LoginToggle = (props) => (
  <div className="level-right">
    <div className="level-item">
      <div className="field">
        <p className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={props.isLoggedIn}
              onChange={props.toggleIsLoggedIn}
            />
            Act as logged-in
          </label>
        </p>
      </div>
    </div>
  </div>
);

LoginToggle.propTypes = {
  isLoggedIn: PropTypes.bool,
  toggleIsLoggedIn: PropTypes.func,
}

export default LoginToggle;
