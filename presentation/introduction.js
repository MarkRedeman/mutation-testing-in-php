import React from "react";
import {
    Heading,
    Text,
    Appear,
    Link,
    Image,
    Code,
    List,
    ListItem,
    CodePane
} from "spectacle";
import ShortList from "../src/short-list.js";

import preloader from "spectacle/lib/utils/preloader";

const images = {
    dna: require("../assets/images/green_blue_dna.min.jpg"),
    groningen: require("../assets/images/groningen-php.png")
};

preloader([images.dna, images.groningen]);

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
    /* notes:`My name is Mark Redeman. I'm a master student Applied Mathematics and freelance web developer. I mostly work with the Laravel framework but I'm also interested in learning other frameworks and writing framework agnostic code.`, */
    notes: `
My name is Mark Redeman and today I will show you how you can improve the quality of your software by learning about mutation testing.

`,
    slide: () => <div>
            <Heading size={1} caps textColor="secondary" fit>
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

export const GroningenPHP = {
    notes: `I'm also one of the co organizers of the GroningenPHP meetup`,
    slide: () => <div>
        <Image
            src={images.groningen.replace("/", "")}
        />
        <Heading size={1} textColor="tertiary" >
            GroningenPHP
        </Heading>
    </div>
}



/*
*/
export const TableOfContents = {
    notes: `
<ul>
   <li>First I will give a brief overview of unit testing and how we can use code coverage as a metric on the quality of our test suite.</li>
   <li>From the examples that I will show, we will see that traditional line coverage is inadequate.</li>
   <li>Next I introduce the concept of mutation testing and how I will show you how it you can use it to improve the quality of your test suite and how it can be used to reduce redundant code.</li>
   <li>After that I will give a qucik demo of humbug, php's mutation testing tool, in action, using an open source project.</li>
   <li>If you have a open source project of your own that uses phpunit and you'd like to know if mutation testing can help improve your project then we can also try your project.</li>
   <li>After the demo I will tell you how you can setup Humbug, show some of its options and show some common issues.</li>
</ul>`,
    slide: () => <div>
        <Heading size={1} fit>
            <Text>What's this talk about?</Text>
        </Heading>
        <ShortList items={[
            "Summary of testing and code coverage",
            "Introduction to mutation testing",
            "Demoing an open source project",
            "Humbug, a mutation testing framework for PHP.",
            "Comparing Humbug with tools from other languages"
        ]} />
    </div>
}

export const Testing = {
    notes: `We all probably know about the advantageous of using an autonomous testing tool.
For me one of the main benefits is the ability to change code while being confident that I will be notified inmediadly when breaking something.`,
    slide: () => <div>
        <Heading size={2}>Testing</Heading>
        <Text>Makes us more comfortable with changing code</Text>
    </div>
};

export const CodeCoverage = {
    notes: ``,
    slide: () => <div>
        <Heading size={2}>Code Coverage</Heading>
        <Text>
            Gives us an indication how well our software is tested
        </Text>

            <List>
                <Appear fid="1"><ListItem>Line coverage</ListItem></Appear>
                <Appear fid="2"><ListItem>Function and Method coverage</ListItem></Appear>
                <Appear fid="3"><ListItem>Class and trait coverage</ListItem></Appear>
                <Appear fid="4"><ListItem>Opcode coverage *</ListItem></Appear>
                <Appear fid="5"><ListItem>Branch coverage *</ListItem></Appear>
            </List>
            {/* It would be nice if this line appeared at the smae time as Opcode coverage */}
            <Appear fid="4">
                <Text>* not yet supported by <Code>PHP_CodeCoverage</Code></Text>
            </Appear>
    </div>
};

export const CodeCoverageNotEnough = {
    notes: `But code coverage alone is not enough to guarantee a fully tested code base`,
    slide: () => <Text fit>Code coverage alone is not enough</Text>
};

export const CodeCoverageBoundaryExample = {
    notes: ``,
    slide: () => <div>
        <Heading size={3}>
            100% code coverage
        </Heading>

        <CodePane
            lang="php"
            source={require("raw!./../assets/codeSamples/introduction/isSuccessful.example")}
            margin="20px auto"
            padding="0 10px 0 0"
        />

        <CodePane
            lang="php"
            source={require("raw!./../assets/codeSamples/introduction/isSuccessfulTest.example")}
            margin="20px auto"
            padding="0 10px 0 0"
        />

        <Appear>
            <Text>But the second condition is never called!</Text>
        </Appear>
    </div>
}

export const CodeCoverageCommandLogger = {
    notes: ``,
    slide: () => <div>
        <Text>Still 100% line coverage</Text>
        <CodePane
            lang="php"
            source={require("raw!./../assets/codeSamples/introduction/commandLogger.example")}
            margin="20px auto"
            padding="0 10px 0 0"
        />

        <CodePane
            lang="php"
            source={require("raw!./../assets/codeSamples/introduction/commandLoggerTest.example")}
            margin="20px auto"
            padding="0 10px 0 0"
        />
    </div>
}

export const MutationTestingSolvesTheseProblems = {
    notes: `Mutation testing solves the problems we get from code coverage.`,
    slide: () => <Text>Using mutation testing, we can solve these problems</Text>
}
