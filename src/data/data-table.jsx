import React from 'react';
import electron from 'electron';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    console.log('DataTable');
    this.state = { keys: [] };
    electron.ipcRenderer.send('refreshData', {key: props.datasourcekey});

    electron.ipcRenderer.on('data', (err, keys) => {
      this.setState({ keys });
    });
  }

  render() {
    return (
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {this.state.keys.map(item => (
            <tr key={item.key}>
              <td>{item.key}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
