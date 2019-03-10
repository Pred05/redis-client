import React from 'react';
import { Link } from 'react-router-dom';
// import electron from 'electron';

export default class DatasourceForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('DataTable');
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <form>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" htmlFor="databaseName">Database name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="databaseName" type="text" placeholder="name" />
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
                  <input className="input" name="host" type="text" placeholder="Host" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" name="port" type="text" placeholder="Port" />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label"></div>
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
