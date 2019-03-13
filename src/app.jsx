import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import electron from 'electron';
import Home from './home/home';
import DatasourceForm from './data/datasource-form';
import DataMain from './data/data-main';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: [],
    };

    electron.ipcRenderer.on('added', (evt, items) => {
      this.setState({ keys: items });
    });

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    electron.ipcRenderer.send('add', { key: e.target.key.value, value: e.target.value.value });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/datasource-form" component={DatasourceForm} />
          <Route path="/data-main/:datasourcekey" component={DataMain} />
        </Switch>
      </Router>
    );
  }
}
