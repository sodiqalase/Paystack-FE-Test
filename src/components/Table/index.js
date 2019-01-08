import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import { getTotalHeight, centimeterToFeet } from "./helpers";

export const CharactersTable = ({ data, className }) => (
  <ReactTable
    data={data}
    columns={charactersTableColumns(data)}
    showPagination={false}
    className={className}
    pageSize={data.length}
    noDataText="No Data"
  />
);

CharactersTable.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const charactersTableColumns = characters => [
  {
    Header: "Name",
    accessor: "name",
    Footer: (
      <span>
        <strong>Number of characters: {characters.length}</strong>
      </span>
    )
  },
  {
    Header: "Gender",
    accessor: "gender",
    Footer: (
      <span>
        <strong>
          Sum of heights: {getTotalHeight(characters)} cm{" "}
          {centimeterToFeet(getTotalHeight(characters))}
        </strong>
      </span>
    )
  },
  {
    Header: "Height",
    accessor: "height",
    sortMethod: (a, b) => a - b
  }
];
