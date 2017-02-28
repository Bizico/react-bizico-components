import React from 'react';

import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

import Components from './Components';
import DataTableDemo from './Components/DataTableDemo';
import Home from './Home';
import {RouteWithSubRoutes, NavBarLink} from '../components';


const NotFound = () => {
  return (<h3>Not found, or in progress ^_^</h3>)
};

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/components',
    component: Components,
    routes: [
      {
        path: '/components/data-table',
        component: DataTableDemo,
        title: 'DataTable'
      }
    ]
  },
  {
    component: NotFound
  }
];

export default class Demo extends React.Component {
  render() {
    return (
      <Router basename="/react-bizico-components">
        <div>
          <Navbar className="demo-nav">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/' >React-Bizico-Components</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <ul className="nav navbar-nav">
                <NavBarLink to="/guide" >Guide</NavBarLink>
                <NavBarLink to="/components" >Components</NavBarLink>
              </ul>
            </Navbar.Collapse>
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