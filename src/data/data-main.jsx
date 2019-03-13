import React from 'react';
import LeftMenu from '../navigation/left-menu';
import DataKeys from './data-keys';
import DataTopBar from './data-top-bar';
import DataRequestBar from './data-request-bar';

export default class DataMain extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.datasourcekey);
  }

  render() {
    return (
      <section className="container is-fullheight">
        <DataTopBar />
        <DataRequestBar />
        <div className="columns is-gapless">
          <div className="column is-2 is-fullheight">
            <LeftMenu />
          </div>
          <div className="column is-4 box is-fullheight">
            <DataKeys />
          </div>
          <div className="column">
            <p>Result</p>
          </div>
        </div>
      </section>
    );
  }
}
