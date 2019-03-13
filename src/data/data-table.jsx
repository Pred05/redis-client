import React from 'react';
import electron from 'electron';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keys: [], addKey: '' };
    electron.ipcRenderer.send('refreshData', { key: props.datasourcekey, multi: ['keys', '*'] });

    electron.ipcRenderer.on('data', (err, keys) => {
      this.setState({ keys: keys, addKey: ''});
    });

    this.keyClick = this.keyClick.bind(this);
    this.add = this.add.bind(this);
  }

  render() {
    return (
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          {this.state.keys.map(item => (
            <tr key={item}>
              <td onClick={(_) => this.keyClick(item)}>{item}</td>
            </tr>
          ))}
          <tr>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input" type="text" placeholder="Add key" value={this.state.addKey} />
              </div>
              <div className="control">
                <a className="button" onClick={this.add}>
                  Add
                </a>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    );
  }

  keyClick(item) {
    console.log(`key: ${item}`);
    electron.ipcRenderer.send('key', {
      datasourcekey: this.props.datasourcekey,
      key: item,
    });
  }

  add(e) {
    console.log(this.state.addKey);
    electron.ipcRenderer.send('addKey', { datasourcekey: this.props.datasourcekey, key: this.state.addKey });
    e.preventDefault();
  }
}
