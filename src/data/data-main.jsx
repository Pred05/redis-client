import React from 'react';
import LeftMenu from '../navigation/left-menu';
import DataKeys from './data-keys';

export default class DataMain extends React.Component {
  render() {
    return (
      <section className="section columns is-gapless is-fullheight">
        <div className="column is-2 is-fullheight">
          <LeftMenu />
        </div>
        <div className="column is-5 box is-fullheight">
          <DataKeys />
        </div>
        <div>
          <p>Result</p>
        </div>
      </section>
    );
  }
}
