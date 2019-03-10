import React from 'react';
// import electron from 'electron';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    console.log('DataTable');
  }

  render() {
    return (
      <section className="section">
        <div className="container fullhd">
          <h1 className="title">
              Redis client
          </h1>
          <p className="subtitle">
              The lightweight redis client write with Electron
          </p>
          <p> Add some data :</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="key" />
            <input type="text" name="value" />
            <button>Add</button>
          </form>
        </div>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Keys</th>
            </tr>
          </thead>
          <tbody>
            {this.state.keys.map(item => (
              <tr key={item}><td>{item}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}
