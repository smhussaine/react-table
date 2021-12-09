import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import ReactTable from "react-table";

import { makeData } from "./util";
import Pagination from "./Pagination";

import "react-table/react-table.css";
import "./styles.css";

const App = (props) => (
  <ReactTable
    PaginationComponent={Pagination}
    data={makeData()}
    columns={[
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Visits",
        accessor: "visits"
      }
    ]}
  />
);

render(<App />, document.getElementById("root"));
