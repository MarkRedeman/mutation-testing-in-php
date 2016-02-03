import React, { Component, PropTypes } from "react";
import { getStyles } from "spectacle/lib/utils/base";
import Radium from "radium";

class TableHeaderItem extends Component {
  render() {
    return (
      <td
        className={this.props.className} style={[this.context.styles.components.tableHeaderItem, getStyles.call(this), this.props.style]}
      >{this.props.children}</td>
    );
  }
}

TableHeaderItem.propTypes = {
  // children: React.PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
};

TableHeaderItem.contextTypes = {
  styles: React.PropTypes.object
};

export default Radium(TableHeaderItem);
