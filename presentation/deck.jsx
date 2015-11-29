import React from "react/addons";

import {
  Deck, Heading, Image, Slide, Link, List, ListItem, Text,
  BlockQuote, Quote, Cite
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import * as Introduction from "./introduction";
import * as Mutation from "./mutation";
import * as Humbug from "./humbug";
import * as Workflow from "./workflow";

const images = {
  book: require("./images/book.png"),
  thomas: require("./images/thomas-edison-2.jpg")
};

preloader([images.thomas]);

export default class extends React.Component {
  render() {
    return (
      <div>
      <Deck transition={["slide", "fade"]} transitionDuration={500} progress="pacman">
        <Introduction.Title
          notes="
            Hi everyone and welcome to my presentation on 'Mutation testing in php with Humbug'.<br/>
            While Mutation testing has existed since the seventies it hasn't been very popular until only recently.
            I first encountered mutation testing while searching for methods to test scientific code.
            At some point I stumbled on a poster by Daniel Hook which was based on his thesis about `Using Code Mutation to Study Code Faults in Scientific Software`
            in which he explains that by mutation code one can find code faults that are not covered by tests.
          "

          footnote="http://matmute.sourceforge.net/silent_fault_poster.pdf"
        />
        {/* footnotes aren't working currently :( */}
        <Introduction.AboutMe
          notes="
            My name is Mark Redeman. I'm a master student Applied Mathematics and freelance web developer.
            I mostly work with the Laravel framework but I'm also interested in learning other frameworks and writing framework agnostic code.
          "
        />
        <Introduction.TableOfContents
          notes="
            I'll first give an introduction to the general concept of mutation testing.
            Thereafter I will introduce a tool called Humbug which automates the process of mutation testing in php.
            We will use this tool to analyze the stability of some open popular open source projects.
            Lastly we will look at ways how mutation testing can improve your workflow.
          "
        />

        <Mutation.Introduction
          notes="
            So what is mutation testing? Mutation testing is a tool that can be used to analyze the stability of a piece of code.<br/>
            Codecoverage is a common way to measure the quality of a code base, but as you will see in the next example it is not a guarantee for bug free code.
            Suppose you have the following piece of code which you'd like to test.
          "
        />
{/* Tests are specifications */}
        <Mutation.Example
          notes="
          Take the following example. We have a customer with a specification that it is a gold customer, meaning it can get discounts, if and only if it has more than 10 orders.
          As we can see the first assertion gives us 100% line coverage, but just this one assertion is clearly not enough to test this function as it only tests that there are some customers who are not gold customers.<br/>
          When all tests are green on mutated code then this means that you have missing tests (/ a missing specification).
          "
        />

        <Mutation.Example2
          notes="

          "
        />

        <Slide
          bgColor="black"
          transition={["slide", "fade"]}
        >
          <BlockQuote>
            <Quote>Generated mutants are similar to real faults</Quote>
            <Cite>Andrew, Briand, Labiche, ICSE 2005</Cite>
          </BlockQuote>
        </Slide>


        <Mutation.Definitions
          notes="
          What we've seen from this example is how manually mutating your code can help you to find missing test cases.
          Before we introduce Humbug, which automates the mutation process, I will show some definitions which make talking about mutation testing easier.
          "
        />

        <Mutation.Mutation />
        <Mutation.KilledMutant />
        <Mutation.EscapedMutant />
        <Mutation.EquivalentMutant />

        <Mutation.Mutators
          notes="
            Operators that produce mutations by changing a piece of code are called Mutators
          "
        />

        <Mutation.MathMutators />
        <Mutation.ConditionalMutators />
        <Mutation.EtcMutators />


        <Mutation.Metrics />
        <Mutation.MetricsExample />

        <Humbug.Introduction />
        <Humbug.Installation />
        <Humbug.Configuration />
        <Humbug.Running />
        <Humbug.Analyzing />
        <Humbug.AnalyzingJson />
        <Humbug.Options />
        <Humbug.Mutators />
        <Humbug.Results />

        {/* <Workflow.Workflow /> */}
        <Workflow.Diagram />

        <Slide
          transition={["slide", "fade"]}
        >
        <Link href="https://leanpub.com/mutationtesting">
          <Heading>Read the book</Heading>
          <Image src={images.book.replace("/", "")}
            margin="40px auto"
            height="100%"
            width="50%"
          />
        </Link>
        </Slide>

        <Slide transition={["slide", "fade"]}>
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
              Python: <Link textColor="secondary" href="https://pypi.python.org/pypi/MutPy/0.4.0/">MutPy</Link>
            </ListItem>
            <ListItem>
              Matlab: <Link textColor="secondary" href="http://matmute.sourceforge.net/">MatMute</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transitionDuration={["slide", "fade"]}>
          <div>
            <Heading>Concluding remarks</Heading>
            <List>
              <ListItem>Mutation testing will improve the quality of your tests</ListItem>
              <ListItem>Is becoming more mainstream over the last years</ListItem>
              <ListItem>Write small (fast) tests</ListItem>
            </List>
          </div>
        </Slide>

        <Slide
          transition={["slide", "fade"]}
          bgImage={images.thomas.replace("/", "")}
          bgDarken="0.75"
        >
          <BlockQuote>
            <Quote>I have not failed. I've just found 10,000 ways that won't work</Quote>
            <Cite>Thomas Edison</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          transition={["slide", "fade"]}
          bgColor="secondary"
        >
          <Heading fit>Find these slides at</Heading>
          <Link href="mutation.markredeman.nl">
            <Text textColor="primary" fit>
              mutation.markredeman.nl
            </Text>
          </Link>
        </Slide>
      </Deck>
      </div>
    );
  }
}
