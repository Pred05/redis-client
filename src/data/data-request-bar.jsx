import React from 'react';
import electron from 'electron';

export default class DataRequestBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { request: '' };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleRequest() {
    console.log(this.state.request);
    electron.ipcRenderer.send('refreshData', { key: this.props.datasourcekey, request: this.state.request });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
