import React from "react/addons";
import {Heading, Text, Appear, Link, List, ListItem, Image} from "../src/spectacle";
import Slide from "./slide";

import preloader from "../src/utils/preloader";
const images = {
  diagram: require("./images/diagram.png")
};
preloader([images.diagram]);

export class Workflow extends Slide {
  contents() {
    return (
      <div>
        <Heading>On workflow</Heading>
      </div>
    );
  }
}

export class Diagram extends Slide {
  contents() {
    return (
        <div>
          <Heading textColor="secondary" fit margin="80px auto 0">
            TDD workflow with mutation testing
          </Heading>

          <Image src={images.diagram.replace("/", "")}
            margin="40px auto"
            bgColor="white"
            padding="20px"
            width="100%"
            height="100%"
          />
        </div>
    );
  }
}

Diagram.defaultProps = {
  ...Slide.defaultProps,
  align: "center flex-start"
};
