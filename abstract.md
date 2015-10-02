Nog een idee:
Kijken naar mijn fout in getallen naar woorden
en dan dat er geen h in tachtig zat

Talk idee:

live voorbeeld aan de hand van http://programmer.97things.oreilly.com/wiki/index.php/Who_Will_Test_the_Tests_Themselves%3F


# Mutation testing in PHP
Mutation testing is a technique that measures the quality of a test suite.
This is done by making small changes (mutations) to our code, which will break our application, and ensuring that there is at least one test that no longer passes.

This talk introduces the concept of mutation testing.
We show that by using mutation testing we can find bugs in code which has a 100% code coverage.
We will look at a few open source projects and use the `padraic/humbug` package to analyze their *Mutation Score Indicator*.
Lastly we look at some of the disadvantages of mutation testing, namely performance and false positives.

Speaker
Mark Redeman is a Applied Mathematics student and freelance webdeveloper.




We use simple examples to illustrate that code coverage is not a reliable way to ensure that a program is 100% bug free.
Later on we will use the `padraic/humbug` package to test a few

Lastly we illustrate the power of mutation testing by showing that having code that has 100% code coverage does not imply that the code is 100% bug free.




to evaluate the quality of your tests by programmatically mutating (i.e. making a series of small modifications to) your code and ensuring that the tests no longer pass.

This is done by deliberately breaking the code .

This is done by deliberately breaking the code under tests
With mutation testing we measuring a test suite's quality by making slight modifications to the existing code.



Writing -

Mutation testing is the process of making slight alterations to your code which should in theory break your program.



We do this by making slightly changing our code such that
since the

In this talk we will first introduce the concept of mutation testing

By making slight alterations to your code we can



mutant
killed mutant