# Mutation testing in PHP with Humbug
This repository is the source code for my presentation *Mutation testing in PHP with Humbug*.
The tool used to write this presentation is [spectacle](https://github.com/FormidableLabs/spectacle) a React based presentation library.
To build the presentation run `npm run build` or `npm run start` (which starts a server so that you can view the presentation on [http://localhost:3000](http://localhost:3000).
The latest version of this presentation can be found on [mutation.markredeman.nl](http://mutation.markredeman.nl).

## Abstract

Mutation testing is a technique that measures the quality of a test suite and helps you write more robust code.
This is done by making small changes (mutations) to our code with the assumption that each mutation introduces a bug in our code.
By automating this process we can find bugs in our code that can't be detected by traditional code coverage tools.


This talk introduces the concept of mutation testing.
First we show that using code coverage as a metric of the quality of a test suite is flawed.
Next we show that by using mutation testing we can find bugs in code which has 100% code coverage.
An overview is given on how a mutation testing tool works and some of its disadvantages are discussed.
Most of these disadvantages however, can be solved by writing well designed software.
Lastely we will take a look at Humbug, a mutation testing tool for PHP and we conclude with a few examples of how a mutation testing tool can help you improve your software and how it can fit in your current workflow.
