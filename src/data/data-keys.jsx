import React from 'react';
import electron from 'electron';

export default class DataKeys extends React.Component {
  constructor(props) {
    super(props);
    console.log('DataTable');
    this.state = { keys: [] };
    electron.ipcRenderer.send('refreshData');

    electron.ipcRenderer.on('data', (err, keys) => {
      this.setState({ keys });
    });
  }

  render() {
    return (
      <table className="table is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          {this.state.keys.map(item => (
            <tr key={item.key}>
              <td>{item.key}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
