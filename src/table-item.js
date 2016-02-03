import React, { Component, PropTypes } from "react";
import { getStyles } from "spectacle/lib/utils/base";
import Radium from "radium";

class TableItem extends Component {
  render() {
    return (
      <td
        style={[this.context.styles.components.tableItem, getStyles.call(this), this.props.style]}
      >{this.props.children}</td>
    );
  }
}

TableItem.propTypes = {
  // children: React.PropTypes.node,
  style: PropTypes.object,
  // className: PropTypes.string
};

TableItem.contextTypes = {
  styles: React.PropTypes.object
};

export default Radium(TableItem);
