import React, { Component, PropTypes } from "react";
import { getStyles } from "spectacle/lib/utils/base";
import Radium from "radium";

class TableRow extends Component {
  render() {
    return <tr
        style={[this.context.styles.components.tableRow, getStyles.call(this), this.props.style]}
      >{this.props.children}</tr>;
  }
}

TableRow.propTypes = {
  // children: React.PropTypes.nod,
  style: PropTypes.object,
  // className: PropTypes.stringe
};

TableRow.contextTypes = {
  styles: React.PropTypes.object
};

export default Radium(TableRow);
