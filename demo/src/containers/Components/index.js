import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {RouteWithSubRoutes} from '../../components'

export default class Components extends React.Component {
  render() {
    let {routes} = this.props;

    return (
      <Row>
          <Col md={3}>

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