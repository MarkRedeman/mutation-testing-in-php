import React, { Component, PropTypes } from "react";
import { getStyles } from "spectacle/lib/utils/base";
import Radium from "radium";


class Table extends Component {
  render() {
    return (

      <table className={this.props.className} style={[this.context.styles.components.table, getStyles.call(this), this.props.style]}>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  // children: React.PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
};

Table.contextTypes = {
  styles: React.PropTypes.object
};

export default Radium(Table);
