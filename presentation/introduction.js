import React from "react";
import {Heading, Text, Appear, Link} from "spectacle";
import ShortList from "../src/short-list.js";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  dna: require("../assets/images/green_blue_dna.min.jpg")
};

preloader([images.dna]);

export const Title = {
    footnote:"http://matmute.sourceforge.net/silent_fault_poster.pdf",
    notes: "Hi everyone and welcome to my presentation on 'Mutation testing in php with Humbug'.<br/>While Mutation testing has existed since the seventies it hasn't been very popular until only recently. I first encountered mutation testing while searching for methods to test scientific code. At some point I stumbled on a poster by Daniel Hook which was based on his thesis about `Using Code Mutation to Study Code Faults in Scientific Software` in which he explains that by mutation code one can find code faults that are not covered by tests.",
    bgImage: images.dna.replace("/", ""),
    bgDarken: 0.5,
    slide: () =>
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
};

export const AboutMe = {
    notes:`My name is Mark Redeman. I'm a master student Applied Mathematics and freelance web developer. I mostly work with the Laravel framework but I'm also interested in learning other frameworks and writing framework agnostic code.`,
    slide: () => <div>
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
}

export const TableOfContents = {
    notes: `
            I'll first give an introduction to the general concept of mutation testing.
            Thereafter I will introduce a tool called Humbug which automates the process of mutation testing in php.
            We will use this tool to analyze the stability of some open popular open source projects.
            Lastly we will look at ways how mutation testing can improve your workflow.`,
    slide: () => <div>
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
}
