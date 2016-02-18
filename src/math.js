import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { getStyles } from "./base";

import katex from "katex";

export class Math extends Component {
  constructor(props) {
    super(props);
    this.state = {
        html: this.generateHtml(this.props)
    };
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.html = this.generateHtml(nextProps);
  }

  generateHtml(props) {
    let rendered;
    try {
      rendered = katex.renderToString(props.math || props.children, {
        displayMode: this.props.displayMode
      });
    } catch (e) {
      rendered = "<span>" + e.message + "</span>";
    }

    return rendered;
  }

  render() {
    const markup = {__html: this.state.html};
    if (this.props.displayMode === false) {
      return <span
               style={[getStyles.call(this), this.props.style]}
               dangerouslySetInnerHTML={markup}
             ></span>;
    } else {
      return <div
               style={[getStyles.call(this), this.props.style]}
               dangerouslySetInnerHTML={markup}
             ></div>;
    }
  }
}

Math.propTypes = {
  children: PropTypes.string,
  displayMode: PropTypes.bool
};

Math.defaultProps = {
  math: false,
  displayMode: false
};

Math.contextTypes = {
  styles: PropTypes.object
};

export default Radium(Math);
