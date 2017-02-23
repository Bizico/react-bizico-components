import React from 'react';
import {Jumbotron, Button, Panel, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome!</h1>
          <p>This is a collection of components that we happened to build during our development endeavors on different projects.</p>
        </Jumbotron>

        <Row>
          <Col md={4}>
            <Panel header={'Data table'} bsStyle="primary">
              <p>
                Customizable data table with expand, ordering, and nesting features.
              </p>

              <Link to="/components/data-table">
                <Button className="pull-right">View Demo</Button>
              </Link>
            </Panel>
          </Col>
        </Row>

      </div>
    )
  }
}
