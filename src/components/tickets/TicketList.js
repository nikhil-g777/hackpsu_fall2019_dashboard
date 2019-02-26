import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Link } from 'react-router';
import "react-table/react-table.css";

import moment from 'moment';
import 'moment-timezone';

const TicketList = ({tickets}) => {

        const statusMap = {
          '0': 'Safe',
          '2': 'Help',
          '6': 'Emergency'
        };
        const ticketSourceMap = {
          '1': 'App',
          '2': 'Whatsapp',
          '3': 'Call'
        };
        return (
          <div>
            <br />
            <ReactTable
              data={tickets}
              filterable
              defaultFilterMethod={(filter, row) =>{
              return (String(row[filter.id]) === filter.value);}
            }
              columns={[
                    {
                      Header: "Id",
                      accessor: "id",
                      show: false
                    },
                    {
                      Header: "Name",
                      accessor: "name",
                      filterable: false,
                      maxWidth: 200
                    },
                    {
                      Header: "mobile",
                      accessor: "mobile",
                      maxWidth: 200,
                      filterable: false
                    },
                    {
                      Header: "Status",
                      accessor: "status",
                      filterable: false,
                      maxWidth: 120,
                      Cell: cellInfo => {
                          return (
                            <span>
                            <span>
                              {
                                statusMap[cellInfo.row.status]
                              }
                            </span>
                            <span style={{
                                color: cellInfo.row.status === 6 ? '#ff2e00'
                                  : cellInfo.row.status === 2 ? '#ffbf00'
                                  : '#57d500',
                                transition: 'all .3s ease'
                              }}>
                                &#x25cf;
                              </span>
                            </span>
                          )}
                    }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
            <br />
          </div>
        );
};

TicketList.propTypes = {
    tickets: PropTypes.array.isRequired
};

export default TicketList;
