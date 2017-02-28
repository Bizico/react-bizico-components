import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {RouteWithSubRoutes, NavBarLink} from '../../components'


export default class Components extends React.Component {
  render() {
    let {routes} = this.props;

    return (
      <Row>
          <Col md={3}>
            <ul className="nav nav-stacked nav-pills">
              {routes.map((route, index)=> {
                return <NavBarLink key={index} to={route.path} >{route.title}</NavBarLink>
              })}
            </ul>
          </Col>
          <Col md={9}>
            {routes.map((route, index)=> {
              return <RouteWithSubRoutes key={index} {...route}/>
            })}
          </Col>
      </Row>
    )
  }
}