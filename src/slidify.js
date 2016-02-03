import React from "react";
import { Slide } from "spectacle";

export default (aSlide) => {
  // Note: it should be possible to do <slide />, but for some reason it isn't..
  const { slide, ...other } = aSlide;
  const props = Object.assign({
    align: "center center",
    transition: ["slide"]
  }, other);
  
  return (
    <Slide { ... props }>
      <aSlide.slide />
    </Slide>
  );
};
