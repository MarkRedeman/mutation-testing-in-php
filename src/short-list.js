import React, { Component } from "react";
import {List, ListItem} from "spectacle";

class ShortList extends Component {
  render() {
    return (
      <List style={this.props.style}>
            {this.props.items.map((item, idx) =>
                                  <ListItem key={idx}>
                                    {item}
                                  </ListItem>
                                 )}
      </List>
    );
  }
}

ShortList.propTypes = {
  items: React.PropTypes.array,
  style: React.PropTypes.object
};

export default ShortList;
