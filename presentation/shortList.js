import React from "react/addons";
// import React, { Component } from 'react';
import {List, ListItem} from "../src/spectacle";

class ShortList extends React.Component {
  render() {
    return (
      <List style={this.props.style}>
        {this.props.items.map((item) => {
          return <ListItem>{item}</ListItem>
        })}
      </List>
    );
  }
}

ShortList.propTypes = {
  items: React.PropTypes.array,
  style: React.PropTypes.object
};

export default ShortList;
