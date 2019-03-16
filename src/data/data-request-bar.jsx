import React from 'react';
import electron from 'electron';

export default class DataRequestBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { request: 'KEYS *' };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.handleRequest();
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-12">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                type="text"
                name="request"
                className="input"
                placeholder="Redis request"
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                value={this.state.request}
              />
            </div>
            <div className="control">
              <a className="button" onClick={this.handleRequest}>
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleRequest();
    }
  }

  handleRequest() {
    electron.ipcRenderer.send('refreshData', { key: this.props.datasourcekey, request: this.state.request });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
