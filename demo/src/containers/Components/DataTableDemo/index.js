import React from 'react';

import {PageHeader, Panel, Accordion} from 'react-bootstrap';
import Highlight from 'react-highlight';

import {DataTable} from '../../../../../src';

import {simpleData, orderingData} from './mock';


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
          component: ({value, row}) => {
            return <div>{value} is {row['status']}</div>;
          },
          dataKey: 'name'
        }
      }, orderingConfig: {
        columns: [
          {
            title: 'Name',
            dataKey: 'name',
            sortable: true
          },
          {
            title: 'Status',
            dataKey: 'status',
            sortable: true
          },
          {
            title: 'Account Balance',
            dataKey: 'accountBalance',
            sortable: true
          }
        ], orderCallback(ordering, column) {
          orderingData.sort((a, b) => {
            let aVal = a[column],
              bVal = b[column],
              order = ordering[column] || 1;
            return aVal > bVal ? order : aVal === bVal ? 0 : -order;
          });
        }
      }
    }
  }

  render() {
    return (
      <div >
        <PageHeader>DataTable Demo</PageHeader>

        <Panel header="Basic example">
          <DataTable data={simpleData} config={this.state.simpleConfig}/>

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

        <Panel header="Expand row">
          <DataTable data={simpleData} config={this.state.expandConfig}/>


          <Highlight fill className="javascript">
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
    component: ({value, row}) => {
      return <div>{value} is {row['status']}</div>;
    },
    dataKey: 'name'
  }
}`}
          </Highlight>
        </Panel>

        <Panel header="Ordering">
          <DataTable data={orderingData} config={this.state.orderingConfig}/>

          <Highlight fill className="javascript">
{`orderingConfig: {
  columns: [
    {
      title: 'Name',
      dataKey: 'name',
      sortable: true
    },
    {
      title: 'Status',
      dataKey: 'status',
      sortable: true
    },
    {
      title: 'Account Balance',
      dataKey: 'accountBalance',
      sortable: true
    }
  ], orderCallback(ordering, column) {
    orderingData.sort((a, b) => {
      let aVal = a[column],
          bVal = b[column],
          order = ordering[column] || 1;
      return aVal > bVal ? order : aVal === bVal ? 0 : -order;
    });
  }
}`}
          </Highlight>
        </Panel>


        <h6>Better examples and docs coming soon™</h6>
      </div>
    )
  }
}
