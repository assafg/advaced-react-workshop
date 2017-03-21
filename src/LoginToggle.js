import React, { Component } from 'react';

export default class LoginToggle extends Component {

  render() {
    return (
      <div className="level-right">
        <div className="level-item">
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input type="checkbox" />
                Act as logged-in
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
