import React from 'react';
import electron from 'electron';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], addKey: '', keyValue: '', showKeyValue: false };
    electron.ipcRenderer.send('refreshData', { key: props.datasourcekey, multi: ['keys', '*'] });

    electron.ipcRenderer.on('data', (err, data) => {
      this.setState({ data, addKey: '', showKeyValue: !Array.isArray(data) });
    });

    electron.ipcRenderer.on('key-value', (err, keyValue) => {
      this.setState({ keyValue, showKeyValue: true });
    });

    this.keyClick = this.keyClick.bind(this);
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  keyClick(item) {
    electron.ipcRenderer.send('key', {
      datasourcekey: this.props.datasourcekey,
      key: item,
    });
  }

  add(e) {
    electron.ipcRenderer.send('addKey', { datasourcekey: this.props.datasourcekey, key: this.state.addKey });
    e.preventDefault();
  }

  renderTable() {
    if (!this.state.data || this.state.data.length <= 1) {
      return (<p className="column">No result</p>);
    }

    let divClassName = 'column ';
    if (this.state.data && this.state.data.length > 1) {
      if (this.state.showKeyValue) {
        divClassName += 'is-4 ';
      }

      divClassName += 'is-fullwidth ';

      return (
        <div className={divClassName}>
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
            {this.state.data.map(item => (
              <tr key={item}>
                <td onClick={(_) => this.keyClick(item)}>{item}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  renderCodeEditor() {
    if (this.state.showKeyValue) {
      return (
        <div className="column is-fullwidth">
          <div className="columns">
            <div className="column is-12">
              <AceEditor
                mode="javascript"
                theme="github"
                onChange={this.onChange}
                value={this.state.keyValue}
                name="ace-main"
                width="100%"
                editorProps={{ $blockScrolling: true }}
              />
            </div>
          </div>
          <div className="columns">
            <span className="column">
              <a className="button is-small is-fullwidth">Cancel</a>
            </span>
            <span className="column">
              <a className="button is-small is-fullwidth is-success">Save</a>
            </span>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="columns is-gapless">
        {this.renderTable()}
        {this.renderCodeEditor()}
      </div>
    );
  }
}
