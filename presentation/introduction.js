import React from "react/addons";
import {Heading, Text, Appear, Link} from "../src/spectacle";
import Slide from "./slide";
import ShortList from "./shortList";

import preloader from "../src/utils/preloader";

// green_blue_dna
// green_dna
const images = {
  dna: require("./images/green_blue_dna.min.jpg")
};
preloader([images.dna]);

export class Title extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} caps textColor="primary" fit>
          Mutation
        </Heading>
        <Heading size={1} caps textColor="primary" fit>
          Testing
        </Heading>

        <Text bold caps textColor="tertiary" fit>
          in PHP with <Link textColor="tertiary" href="https://github.com/padraic/humbug">Humbug</Link>
        </Text>
      </div>
    );
  }
}
Title.defaultProps = {
  ...Slide.defaultProps,
  bgImage: images.dna.replace("/", ""),
  bgDarken: 0.5
};

export class AboutMe extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          @MarkRedeman
        </Heading>

        <Appear>
          <Text bold caps textColor="tertiary" fit>
            Student Applied Mathematics
          </Text>
        </Appear>

        <Appear>
          <Text bold caps textColor="tertiary" fit>
            Freelance (web) developer
          </Text>
        </Appear>
      </div>
    );
  }
}

export class TableOfContents extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} fit>
          <Text>What's this talk about?</Text>
        </Heading>
        <ShortList items={[
          "Introduction to mutation testing",
          "Humbug, a mutation testing framework for PHP.",
          "Analyzing code coverage of open source projects",
          "Improving your workflow with mutation testing"
        ]} />
      </div>
    );
  }
}
