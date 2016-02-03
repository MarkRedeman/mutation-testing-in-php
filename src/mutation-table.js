import React, { PropTypes } from "react";
import Radium from "radium";

import Table from "./table.js";
import TableRow from "./table-row.js";
import TableItem from "./table-item.js";
import TableHeaderItem from "./table-header-item.js";
import { Code } from "spectacle";

const MutationTable = (props, context) =>
  <Table style={[context.styles.components.table, props.style]} margin="40px 0">
    <TableRow>
      <TableHeaderItem>Original</TableHeaderItem>
      <TableHeaderItem>Mutated</TableHeaderItem>
    </TableRow>
    {props.mutations.map((mutation, idx) => {
      return (
        <TableRow key={idx}>
          <TableItem>
            <Code>{mutation.original}</Code>
          </TableItem>
          <TableItem>
            <Code>{mutation.mutated}</Code>
          </TableItem>
        </TableRow>
      );
    })}
  </Table>;

MutationTable.propTypes = {
  mutations: React.PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string,
      mutated: PropTypes.string
    })),
  style: PropTypes.object
};

MutationTable.contextTypes = {
  styles: PropTypes.object
};

export default Radium(MutationTable);
