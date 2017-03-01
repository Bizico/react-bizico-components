import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Components from './Components';
import DataTableDemo from './Components/DataTableDemo';
import Home from './Home';
import { RouteWithSubRoutes, NavBarLink } from '../components';


const NotFound = () => (
  <h3>Not found, or in progress ^_^</h3>
);

const routes = [
  {
    path: '/',
    Component: Home,
    exact: true,
  },
  {
    path: '/components',
    Component: Components,
    routes: [
      {
        path: '/components/data-table',
        Component: DataTableDemo,
        title: 'DataTable',
      },
    ],
  },
  {
    Component: NotFound,
  },
];

const Demo = () => (
  <Router basename="/react-bizico-components">
    <div>
      <Navbar className="demo-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React-Bizico-Components</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <NavBarLink to="/guide">Guide</NavBarLink>
            <NavBarLink to="/components">Components</NavBarLink>
          </ul>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path || 'notFound'} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  </Router>
);

export default Demo;
