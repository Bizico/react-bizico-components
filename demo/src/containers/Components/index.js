import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import { RouteWithSubRoutes, NavBarLink } from '../../components';

const Components = ({ routes }) => (
  <Row>
    <Col md={3}>
      <ul className="nav nav-stacked nav-pills">
        {routes.map(route => (
          <NavBarLink key={route.title} to={route.path}>{route.title}</NavBarLink>
        ))}
      </ul>
    </Col>
    <Col md={9}>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.title} {...route} />
      ))}
    </Col>
  </Row>
);


Components.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Components;
