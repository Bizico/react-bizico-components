import React from 'react';

import {PageHeader, Panel, Accordion} from 'react-bootstrap';
import Highlight from 'react-highlight';

import {DataTable} from '../../../../../src'

import {simpleData} from './mock';

export default class DataTableDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      simpleConfig: {
        columns: [
          {
            title: 'Name',
            dataKey: 'name'
          },
          {
            title: 'Status',
            dataKey: 'status'
          }
        ]
      },
      expandConfig: {
        columns: [
          {
            title: 'Name',
            dataKey: 'name'
          },
          {
            title: 'Status',
            dataKey: 'status'
          }
        ],
        expand: {
          component: (props) => {
            return <div>{props.value}</div>;
          },
          dataKey: 'name'
        }
      }
    }
  }

  render() {
    return (
      <div >
        <PageHeader>DataTable Demo</PageHeader>

        <Panel header="Basic example">
          <DataTable fill data={simpleData} config={this.state.simpleConfig}/>
        </Panel>
        <Panel header="Config" collapsible={true}>
          <Highlight fill className="javascript">
{`simpleConfig: {
  columns: [
    {
      title: 'Name',
      dataKey: 'name'
    },
    {
      title: 'Status',
      dataKey: 'status'
    }
  ]
}`}
          </Highlight>
        </Panel>

        <h4>Expand row</h4>
        <DataTable data={simpleData} config={this.state.expandConfig}/>
        <h5>Config</h5>

        <pre>
{`expandConfig: {
  columns: [
    {
      title: 'Name',
      dataKey: 'name'
    },
    {
      title: 'Status',
      dataKey: 'status'
    }
  ],
  expand: {
    component: (props) => {
      return <div>{props.value}</div>;
    },
    dataKey: 'name'
  }
}`}
        </pre>

        <h6>Better examples and docs coming soon™</h6>
      </div>
    )
  }
}
