import React from 'react';
import { Link, R } from 'react-router-dom';
import electron from 'electron';

export default class DatasourceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      databaseName: '',
      host: '',
      port: '',
      error: ''
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getError() {
    if (this.state.error) {
      return (<p>{this.state.error}</p>);
    }
    return ('');
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (!this.state.databaseName) {
      // Databasename cannot be empty
      this.setState({error: 'Database name cannot be empty.'});
      return;
    }

    if (!this.state.host) {
      // Host cannot be empty
      this.setState({error: 'Host cannot be empty.'});
      return;
    }

    if (!this.state.port) {
      // Port cannot be empty
      this.setState({error: 'Port cannot be empty.'});
      return;
    }

    electron.ipcRenderer.send('submitNewDatasource', {
      name: this.state.databaseName,
      host: this.state.host,
      port: this.state.port,
    });
    this.props.history.push('/');
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Back</Link>
        {this.getError()}
        <form onSubmit={this.handleOnSubmit}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" htmlFor="databaseName">Database name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="databaseName" type="text" placeholder="Name" onChange={this.handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" htmlFor="host">Host</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="host" type="text" placeholder="Host" onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" name="port" type="text" placeholder="Port" onChange={this.handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-primary">
                    Add datasource
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
