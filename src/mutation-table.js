import React from "react/addons";
import Base from "./base";
import Radium from "radium";

import Table from "./table";
import TableRow from "./table-row";
import TableItem from "./table-item";
import TableHeaderItem from "./table-header-item";
import Code from "./code";

@Radium
class MutationTable extends Base {
  render() {
    return (
    <Table style={[this.context.styles.components.table, this.getStyles(), this.props.style]} margin="40px 0">
      <TableRow><TableHeaderItem>Original</TableHeaderItem><TableHeaderItem>Mutated</TableHeaderItem></TableRow>
      {this.props.mutations.map((mutation) => {
        return (
            <TableRow>
                <TableItem><Code>{mutation.original}</Code></TableItem>
                <TableItem><Code>{mutation.mutated}</Code></TableItem>
            </TableRow>
        );
      })}
    </Table>
    );
  }
}

MutationTable.propTypes = {
  mutations: React.PropTypes.required
};

MutationTable.contextTypes = {
  styles: React.PropTypes.object
};

export default MutationTable;