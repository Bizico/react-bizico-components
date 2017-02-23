import React from 'react';

import {DataTable} from '../../../../src'

import {simpleData} from './mock.json';

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
    return <div>
      <div >
        <h1>Data-Table Demo</h1>
        <h4>Basic example</h4>
        <DataTable data={simpleData} config={this.state.simpleConfig}/>
        <h5>Config</h5>
        <pre>
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
        </pre>


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
    </div>
  }
}
