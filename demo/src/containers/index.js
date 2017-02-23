import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

import DataTableDemo from './DataTableDemo';
import Home from './Home';
import {RouteWithSubRoutes} from '../components';

const NotFound = () => {
  return (<h3>Not Found</h3>)
};

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/components/data-table',
    component: DataTableDemo
  },
  {
    component: NotFound
  }
];

export default class Demo extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/'>React-Bizico-Components</Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <div className="container">
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}