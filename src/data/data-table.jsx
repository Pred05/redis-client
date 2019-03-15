import React from 'react';
import electron from 'electron';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keys: [], addKey: '' };
    electron.ipcRenderer.send('refreshData', { key: props.datasourcekey, multi: ['keys', '*'] });

    electron.ipcRenderer.on('data', (err, keys) => {
      this.setState({ keys, addKey: '' });
    });

    this.keyClick = this.keyClick.bind(this);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
                <input className="input" type="text" name="addKey" placeholder="Add key" value={this.state.addKey} onChange={this.handleChange} />
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
