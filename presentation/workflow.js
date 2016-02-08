import React from "react";
import {Heading, Image} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
const images = {
  diagram: require("../assets/images/diagram.png")
};
preloader([images.diagram]);

export const Workflow = {
  slide: () => {
    return (
      <div>
        <Heading>On workflow</Heading>
      </div>
    );
  }
};

export const Diagram = {
  align: "center flex-start",
  slide: () => {
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
};

export const CodeReview = {
    slide: () => <Heading size={2} textColor="tertiary">Use it while code reviewing</Heading>
};
