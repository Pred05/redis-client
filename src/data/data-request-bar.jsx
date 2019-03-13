import React from 'react';

export default class DataRequestBar extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-12 field">
          <span className="control">
            <input type="text" className="input" placeholder="Redis request" />
          </span>
        </div>
      </div>
    );
  }
}
