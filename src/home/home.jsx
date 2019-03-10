import React from 'react';
import { Link } from 'react-router-dom';
import electron from 'electron';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redisList: {} }
    electron.ipcRenderer.send('refreshDatasources');
    electron.ipcRenderer.on('redis-localhost', (err, isOk) => {
      console.log('Redis OK');
      this.setState({ redisList: { redisLocalhost: isOk } });
    });
  }

  getRedisServerIconStatus(key) {
    if (this.state.redisList[key]) {
      return (<i className="far fa-check-circle" style={{ color: 'green' }} />);
    }
    return (<i className="far fa-times-circle" style={{ color: 'red' }} />);
  }

  listRedisServer() {
    return Object.keys(this.state.redisList).map((item) => {
      console.log(item);
      return (
        <tr>
          <td>{item}</td>
          <td>{item}</td>
          <td>{this.getRedisServerIconStatus(item)}</td>
        </tr>);
    });
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
                <a className="tile is-child box">
                  <p className="title">
                    <i className="fas fa-database" /> Start new redis database
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
                    <th>Url</th>
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
