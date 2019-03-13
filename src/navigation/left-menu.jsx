import React from 'react';
import { Link } from 'react-router-dom';
// import electron from 'electron';

export default class LeftMenu extends React.Component {

  render() {
    return (
      <aside className="menu">
        <ul className="menu-list">
          <li><Link to="/">Back</Link></li>
        </ul>
        <p className="menu-label">
          Database
        </p>
        <ul className="menu-list">
          <li><a>Customers</a></li>
        </ul>
      </aside>
    );
  }
}
