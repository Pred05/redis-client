import React from 'react';
import LeftMenu from '../navigation/left-menu';
import DataTable from './data-table';

export default class DataMain extends React.Component {
  render() {
    return (
      <section className="section columns is-fullheight">
        <LeftMenu />
        <DataTable />
      </section>
    );
  }
}
