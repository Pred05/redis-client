import React from 'react';
import { Link } from 'react-router-dom';
import electron from 'electron';
import * as DatasourceUtil from '../api/util/datasource-util';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redisList: {} };
    electron.ipcRenderer.send('refreshDatasources');
    this.datasourceListener = (err, datasourceList) => {
      this.setState({ datasourceList });
    };
    electron.ipcRenderer.on('datasource', this.datasourceListener);

    this.deleteDatasource = this.deleteDatasource.bind(this);
  }

  componentWillUnmount() {
    electron.ipcRenderer.removeListener('datasource', this.datasourceListener);
  }

  deleteDatasource(item) {
    electron.ipcRenderer.send('deleteDatasource', item);
  }

  getRedisServerIconStatus(item) {
    if (item && item.datasourceStatus === 'ON') {
      const datasourceKey = DatasourceUtil.getDatasourceKeyByDatasource(item);
      return (
        <span>
          <i className="far fa-check-circle" style={{ color: 'green' }} />
          <Link to={`/data-main/${datasourceKey}`} className="button is-small" >
            <span className="icon is-small" ><i className="fas fa-sign-in-alt" /></span>
          </Link>
        </span>
      );
    }
    return (<i className="far fa-times-circle" style={{ color: 'red' }} />);
  }

  getActionButton(item) {
    const actions = [];
    if (!(item.host === 'localhost' && item.port === '6379')) {
      actions.push((
        <span key={`trash-${item.host}:${item.port}`}>
          <a className="button is-small" onClick={() => this.deleteDatasource(item)}>
            <span className="icon is-small" ><i className="fas fa-trash-alt" /></span>
          </a>
        </span>
      ));
    }
    return actions;
  }

  listRedisServer() {
    if (this.state.datasourceList) {
      return Object.values(this.state.datasourceList).map(item => (
        <tr key={`${item.url}:${item.port}`}>
          <td>{item.name}</td>
          <td>{item.host}:{item.port}</td>
          <td>
            {this.getRedisServerIconStatus(item)}
            {this.getActionButton(item)}
          </td>
        </tr>));
    }
    return (
      <tr key="unknow">
        <td colSpan="3" className="has-text-centered">No datasource</td>
      </tr>
    );
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <p className="title">
                Welcome to Redis client
            </p>
            <p className="subtitle">
                The lightweight redis client write with ElectronJs
            </p>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <Link className="tile is-child box" to="/datasource-form">
                  <p className="title">
                    <i className="fas fa-plus" /> Add redis database connection
                  </p>
                </Link>
              </div>
              <div className="tile is-parent">
                <a className="tile is-child box" disabled>
                  <p className="title">
                    <i className="fas fa-database" /> Start new redis database (coming soon)
                  </p>
                </a>
              </div>
            </div>
            <div className="box">
              <p className="title"><i className="fas fa-plug" /> Database connected</p>
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Host:Port</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  { this.listRedisServer() }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
