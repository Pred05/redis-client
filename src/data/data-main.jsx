import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from './data-table';
import DataTopBar from './data-top-bar';
import DataRequestBar from './data-request-bar';

export default class DataMain extends React.Component {
  render() {
    return (
      <section className="container is-fullheight">
        <Link to="/">Back</Link>
        <DataTopBar />
        <DataRequestBar datasourcekey={this.props.match.params.datasourcekey} />
        <DataTable datasourcekey={this.props.match.params.datasourcekey} />
      </section>
    );
  }
}
