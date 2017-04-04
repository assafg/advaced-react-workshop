import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleIsLoggedIn } from './redux';

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

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsLoggedIn: () => dispatch(toggleIsLoggedIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginToggle);
