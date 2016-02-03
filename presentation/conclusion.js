
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
    Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  book: require("../assets/images/book.png"),
  thomas: require("../assets/images/thomas-edison-2.jpg")
};
preloader([images.diagram]);

export const Book = {
  slide: () => {
    return (
      <div>
        <Link href="https://leanpub.com/mutationtesting">
          <Heading>Read the book</Heading>
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
            <Heading>Other tools</Heading>
            <List>
                <ListItem>
                    Ruby: <Link textColor="secondary" href="https://github.com/mbj/mutant">Mutant</Link>
                </ListItem>
                <ListItem>
                    Java: <Link textColor="secondary" href="http://pitest.org/">Pitest</Link>
                </ListItem>
                <ListItem>
                    C#: <Link textColor="secondary" href="http://ninjaturtles.codeplex.com/">Ninjaturtles</Link>
                </ListItem>
                <ListItem>
                    Python: <Link textColor="secondary" href="https://pypi.python.org/pypi/MutPy/0.4.0/">MutPy</Link> <Link textColor="seconday" href="https://github.com/sixty-north/cosmic-ray" >Cosmic Ray</Link>
                </ListItem>
                <ListItem>
                    Matlab: <Link textColor="secondary" href="http://matmute.sourceforge.net/">MatMute</Link>
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

