import React from 'react';

export default class DataRequestBar extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-12">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input type="text" className="input" placeholder="Redis request" />
            </div>
            <div className="control">
              <a className="button">
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
