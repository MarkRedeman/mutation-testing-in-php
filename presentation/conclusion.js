
import React from "react";
import {
    Heading,
    Image,
    BlockQuote,
    Cite,
    Deck,
    Link,
    ListItem,
    List,
    Quote,
    Slide,
    Spectacle,
    Layout,
    Fit,
    Fill,
    Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  book: require("../assets/images/book.png"),
  thomas: require("../assets/images/thomas-edison-2.jpg")
};
preloader([images.book, images.thomas]);

export const Book = {
  slide: () => {
    return (
      <div style={{padding:"0 180px"}}>
          <Heading size={1} fit>Mutation Testing</Heading>
          <Heading size={2} fit>Better Code By Making Bugs</Heading>
          <Link href="https://leanpub.com/mutationtesting">
              <Image src={images.book.replace("/", "")}
                     margin="40px auto"
                     height="100%"
                     width="50%"
              />
          </Link>
      </div>
    );
  }
};

export const OtherLanguages = {
  slide: () => {
    return (
        <div>
            <Heading size={2} fit textColor="tertiary">Tools for other languages</Heading>
            <List>
                <ListItem>
                    Ruby: <Link textColor="secondary" href="https://github.com/mbj/mutant">Mutant</Link> (https://github.com/mbj/mutant)
                </ListItem>
                <ListItem>
                    Java: <Link textColor="secondary" href="http://pitest.org/">Pitest</Link> (http://pitest.org/)
                </ListItem>
                <ListItem>
                    C#: <Link textColor="secondary" href="http://ninjaturtles.codeplex.com/">Ninjaturtles</Link> (http://ninjaturtles.codeplex.com/)
                </ListItem>
                <ListItem>
                    Python: <Link textColor="secondary" href="https://github.com/sixty-north/cosmic-ray" >Cosmic Ray</Link> (https://github.com/sixty-north/cosmic-ray)
                </ListItem>
                <ListItem>
                    Matlab: <Link textColor="secondary" href="http://matmute.sourceforge.net/">MatMute</Link> (http://matmute.sourceforge.net/)
                </ListItem>
            </List>
        </div>
    );
  }
};

export const Remarks = {
  slide: () => {
    return (
        <div>
            <Heading>Concluding remarks</Heading>
            <List>
                <ListItem>Mutation testing will improve the quality of your tests</ListItem>
                <ListItem>Is becoming more mainstream over the last years</ListItem>
                <ListItem>Write small (fast) tests</ListItem>
            </List>
        </div>
    );
  }
};

export const Thomas = {
    bgImage: images.thomas.replace("/", ""),
    bgDarken: "0.75",
    slide: () =>
        <BlockQuote>
            <Quote>I have not failed. I've just found 10,000 ways that won't work</Quote>
            <Cite>Thomas Edison</Cite>
        </BlockQuote>
};

export const End = {
    bgColor: "secondary",
    slide: () =>
        <div>
            <Heading fit margin="0 0 1em">Thanks for listening</Heading>
            <div style={{background: "rgb(9, 196, 127)", padding: "1em"}} >
                <Heading textColor="secondary" fit>Find these slides at</Heading>
                <Link href="http://mutation.markredeman.nl">
                    <Text textColor="secondary" fit>
                        mutation.markredeman.nl
                    </Text>
                </Link>
            </div>
        </div>
};

