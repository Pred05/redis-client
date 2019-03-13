import React from 'react';
import LeftMenu from '../navigation/left-menu';
import DataTable from './data-table';
import DataTopBar from './data-top-bar';
import DataRequestBar from './data-request-bar';
import electron from 'electron';

export default class DataMain extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.datasourcekey);

    this.state = { keyValue: '' };

    electron.ipcRenderer.on('key-value', (err, keyValue) => {
      this.setState({ keyValue });
    });
  }

  render() {
    return (
      <section className="container is-fullheight">
        <DataTopBar />
        <DataRequestBar />
        <div className="columns is-gapless">
          <div className="column is-2 is-fullheight">
            <LeftMenu />
          </div>
          <div className="column is-4 is-fullheight">
            <DataTable datasourcekey={this.props.match.params.datasourcekey} />
          </div>
          <div className="column">
            <textarea className="textarea" placeholder="Value" value={this.state.keyValue} />
          </div>
        </div>
      </section>
    );
  }
}
