import React from 'react';

export default class DataTopBar extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="field is-horizontal">
            <div className="field">
              <span className="control">
                <a className="button">
                  <span className="icon is-small">
                    <i className="fas fa-plus" />
                  </span>
                </a>
              </span>
            </div>
            <div className="field has-addons">
              <span className="control">
                <a className="button">
                  <span className="icon is-small">
                    <i className="fas fa-save" />
                  </span>
                </a>
              </span>
              <span className="control">
                <a className="button">
                  <span className="icon is-small">
                    <i className="fas fa-undo" />
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
