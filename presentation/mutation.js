import React from "react";
import {
  Heading, List, ListItem, Text, Appear, CodePane, Code,
  Layout, Fill, Fit
} from "spectacle";

import ShortList from "../src/short-list.js";
import Table from "../src/table.js";
import TableRow from "../src/table-row.js";
import TableHeaderItem from "../src/table-header-item.js";
import TableItem from "../src/table-item.js";
import MutationTable from "../src/mutation-table.js";
import Math from "../src/math.js";

export const Introduction = {
  notes: `
So what is mutation testing and how can it help imrpove our test suite and our code?<br/>
I will introduce mutation testing using an example.
`,
  slide: () => {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          What is mutation testing?
        </Heading>
        <ShortList items={[
          "A tool to analyze stability of a piece of code",
          "Similar to code coverage, but better",
          "Can find missing tests",
          "Reduces redundant code"
        ]}
        />
      </div>
    );
  }
};

export const Example = {
  notes: `
Consider a customer class that has a method 'goldMember'.
This method indicates whether the customer is allowed to get some discounts.
The buisinuess has told us that anyone with more than 10 orders is a gold customer, so we implement this using the given function.
We are of course using Test Driven Development, so we first wrote a test checking that someone without orders is not a gold customer and someone with 11 orders is a gold customer.
But this code isn't stable.
We can change the code without having a failing test.
`,
  slide: () => {
    return (
      <div>
          <Heading textSize="2.5rem">Original customer class</Heading>

          <CodePane lang="php" source={require("raw!./../assets/codeSamples/mutation/goldMember.example")}  />
          <CodePane lang="php" source={require("raw!./../assets/codeSamples/mutation/goldMemberTest.example")}  />
      </div>
    );
  }
};

export const Example2 = {
    notes: `
So we have now seen that when we change, or mutate, a piece of code then we can still get passing tests.
We can use this knowledge for improving our tests.
`,
  slide: () => {
    return (
      <div>
          <Heading textSize="2.5rem">Mutated customer class</Heading>
          <Text>
              The new code is called the <strong>mutant</strong>.
          </Text>
          <Layout>
              <Fit>
                  <CodePane lang="diff" source={require("raw!./../assets/codeSamples/mutation/goldMemberMutated.example")}  />
              </Fit>
              <Fill>
                  <div style={{margin:"0 0 0 20px"}}>
                      <CodePane lang="php" source={require("raw!./../assets/codeSamples/mutation/goldMemberTest.example")}/>
                  </div>
              </Fill>
          </Layout>
          <Appear fid="1">
              <Text fit>Still passes all assertions! (The mutant is <strong>alive</strong> / has <strong>escaped</strong>)</Text>
          </Appear>
          <Appear fid="2">
              <CodePane lang="diff" source={require("raw!./../assets/codeSamples/mutation/goldMemberMutatedTest.example")} />
          </Appear>
          <Appear fid="3" >
              <Text>The new test has <strong>killed</strong> the mutant</Text>
          </Appear>
      </div>
    );
  }
};

export const MutationTesting = {
    notes: `
When we automate this process we get Mutation testing.
When doing mutation testing we first run the test suite.
Once all tests are passing we generate mutatnts based on a set op mutation operators.
(Note: in the slides I specified that we do this for each file, but an implementation of mutation testing does not need to depend on the filesystem, instead it could use the AST or byte / opcode)
Next for each generated mutant we run the test suite.
If at least one test fails, the mutant is said to have been killed.
Next we analyze the results.
`,
    slide: () =>
        <div>
            <Heading fit size={1} textColor="secondary">Mutation Testing</Heading>
            <List style={{ listStyleType: "decimal" }}>
                <ListItem>Run the test suite, if something fails: stop and fix the code</ListItem>
                <ListItem>For each file, find and create all possible mutations</ListItem>
                <ListItem>For each mutant, run the test suite on the mutated code</ListItem>
                <ListItem>Analyze the results</ListItem>
            </List>
        </div>
};

export const Mutation = {
    notes: `
A mutation is a piece of code that has been mutated by a mutation operator.
When at least one test fails on the mutated code we say that it has been killed, otherwise it has escaped.
Additionally Humbug alos categorizes mutants as uncovered, timeout and fatal errors.
`,
    slide: () =>
        <div>
            <Heading fit size={1} textColor="secondary">Mutation</Heading>
            <Text fit>Code that has been mutated by a mutation operator</Text>
            <Appear>
                <Text fit>A mutation can either be <strong>killed</strong>, or it can <strong>escape</strong></Text>
            </Appear>
            <List>
                <Appear>
                    <ListItem>A mutation is said to be killed if at least <strong>1</strong> test fails</ListItem>
                </Appear>
                <Appear>
                    <ListItem>A mutation is said to have escaped if the test suite passes</ListItem>
                </Appear>
            </List>
            <Appear>
                <Text margin="1em">(Humbug also uses the concept of <strong>uncovered</strong>, <strong>timeout</strong> and <strong>fatal error</strong> mutants)</Text>
            </Appear>
        </div>
};

export const GenerateMutants = {
    slide: () => <Text>But how do we generate mutants?</Text>
};

export const Operator = {
    slide: () =>
        <div>
            <Heading fit size={1} textColor="secondary">Mutation Operator</Heading>
            <Text>Given a piece of code (represented by a file, AST or some byte code)</Text>
        </div>
};

export const Definitions = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 40px" >Some Definitions</Heading>
      </div>
    );
  }
};

export const MutationOld = {
  slide: () => {
    return (
      <div>
        <Heading fit size={1} textColor="secondary">Mutation</Heading>
        <Text>a piece of code that has been changed (mutated) by a mutator</Text>
        <List>
          <Appear><ListItem><strong>killed</strong> if at least 1 test fails</ListItem></Appear>
          <Appear><ListItem><strong>escaped</strong> if at all test pass</ListItem></Appear>
          <Appear><ListItem><strong>equivalent</strong> if there does not exist a test case which can distinguish the mutant from the original code</ListItem></Appear>
          <Appear><ListItem><strong>uncovered</strong> mutant is not covered by a test</ListItem></Appear>
          <Appear><ListItem><strong>fatal</strong> mutant produces a fatal error</ListItem></Appear>
          <Appear><ListItem><strong>timout</strong> unit tests exceed allowed timeout</ListItem></Appear>
        </List>
      </div>
    );
  }
};

export const KilledMutant = {
  slide: () => {
    return (
      <div>
        <Heading>Killed Mutant</Heading>
        <CodePane lang="php" source={require("raw!./../assets/codeSamples/goldmember_killed.example")} margin="20px auto" padding="0 10px 0 0" />
      </div>
    );
  }
};

export const EscapedMutant = {
  slide: () => {
    return (
      <div>
        <Heading>Escaped Mutant</Heading>
        <CodePane lang="php" source={require("raw!./../assets/codeSamples/goldmember_escaped.example")} margin="20px auto" padding="0 10px 0 0" />
      </div>
    );
  }
};

export const EquivalentMutant = {
  slide: () => {
    return (
      <div>
        <Heading size={2}>Equivalent Mutant</Heading>
        <CodePane
          lang="diff"
          source={require("raw!./../assets/codeSamples/mutation/equivalent.example")}
          margin="20px auto"
          padding="0 10px 0 0"
        />

        <Appear>
          <div>
            <Text><strong>Not a problem</strong>: refactor and use the std library</Text>
            <CodePane
              lang="php"
              source={require("raw!./../assets/codeSamples/mutation/equivalentSolution.example")}
            />
          </div>
        </Appear>
      </div>
    );
  }
};

export const MutationOperator = {
  slide: () => {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          Mutation Operator
        </Heading>
        <Text fit>
            Operator that changes (mutates) a piece of code
        </Text>
        <Text margin="40px 0 0 0">
            Come in different flavors:
        </Text>
        <List>
            <Appear>
                <ListItem>Binary Arithmetic</ListItem>
            </Appear>
            <Appear>
                <ListItem>Boolean Substitution</ListItem>
            </Appear>
            <Appear>
                <ListItem>Conditional Boundaries</ListItem>
            </Appear>
            <Appear>
                <ListItem>Negated Conditionals</ListItem>
            </Appear>
            <Appear>
                <ListItem>Increments</ListItem>
            </Appear>
            <Appear>
                <ListItem>Return values</ListItem>
            </Appear>
            <Appear>
                <ListItem>Literal Numbers</ListItem>
            </Appear>
        </List>
      </div>
    );
  }
};

export const BinaryArithmetic = {
    slide: () =>
        <div>
            <Heading size={1} caps textColor="black" fit>
                Binary Arithmetic Operator
            </Heading>

            <MutationTable mutations={[
                { original: "+", mutated: "-" },
                { original: "-", mutated: "+" },
                { original: "*", mutated: "/" },
                { original: "/", mutated: "*" },
                { original: "%", mutated: "*" }
            ]}
            />
            <Appear>
                <CodePane lang="diff" source={require("raw!./../assets/codeSamples/mutators/binary.example")} />
            </Appear>
        </div>
};

export const BooleanSubstitution = {
    slide: () =>
        <div>
            <Heading size={1} caps textColor="black" fit>
                Boolean Substitution Operator
            </Heading>

            <MutationTable mutations={[
                { original: "true", mutated: "false" },
                { original: "false", mutated: "true" },
                { original: "&&", mutated: "||" },
                { original: "||", mutated: "&&" },
                { original: "and", mutated: "or" },
                { original: "or", mutated: "and" },
                { original: "!", mutated: "" }
            ]}
            />
        </div>
};

export const ConditionalBoundaries = {
    slide: () =>
        <div>
            <Heading size={1} caps textColor="black" fit>
                Conditional Boundary Operator
            </Heading>

            <MutationTable mutations={[
                { original: ">", mutated: ">=" },
                { original: "<", mutated: "<=" },
                { original: ">=", mutated: ">" },
                { original: "<=", mutated: "<" }
            ]}
            />

            <Text>We've already seen this mutaiton in one of the previous examples</Text>
        </div>
};

export const ReturnValues = {
    slide: () =>
        <div>
            <Heading size={1} caps textColor="black" fit>
                Return Values Operator
            </Heading>
            <MutationTable style={{textAlign:"left"}} mutations={[
                { original: "return true;",                    mutated: "return false;" },
                { original: "return 1.0;",                     mutated: "return -( + 1);" },
                { original: "return $this;",                   mutated: "return null;" },
                /* { original: "return 0;",                       mutated: "return 1;" }, */
                /* { original: "return function();  function();", mutated: "return null;" }, */
                /* { original: "return ; ",                       mutated: "return 0;" }, */
                /* { original: "return new Class; new Class;",    mutated: "return null;" }, */
                /* { original: "return 0.0;",                     mutated: "return 1.0;" }, */
                { original: "return (stmt);",              mutated: "(stmt); return null;" },
                { original: "return 1.0;",                     mutated: "return 0.0; " }
            ]}
            />
            <Text>Very useful due to php's dynamic types</Text>
        </div>
};

export const EtcMutations = {
    slide: () =>
        <div>
            <Heading size={2}>
                Other types of operators
            </Heading>
            <List>
                <ListItem><strong>Negated Conditionals</strong><br /> negates conditional, i.e. <Code>!==</Code> becomes <Code>===</Code></ListItem>
                <ListItem><strong>Increments</strong><br /> interchanges <Code>++</Code> and <Code>--</Code></ListItem>
                <ListItem><strong>Literal Numbers</strong><br /> changes literal int and float values (useful for checking boundaries)</ListItem>
            </List>
        </div>
};

export const Recap = {
    slide: () =>
        <div>
            <Heading size={2}>
                Recap
            </Heading>
            <List style={{ listStyleType: "decimal" }}>
                <ListItem>Run the test suite, if something fails: stop and fix the code</ListItem>
                <ListItem>For each file, find and create all possible mutations</ListItem>
                <ListItem>For each mutant, run the test suite on the mutated code</ListItem>
                <ListItem>Analyze the results</ListItem>
            </List>
        </div>
};

export const ImplementingOperator = {
    slide: () =>
        <div>
            <Heading size={2} fit>
                Implementing a mutation operator
            </Heading>
            <Text margin="40px 0 0 0">A mutation operator can be applied by changing</Text>
            <List>
                <ListItem>The filesystem</ListItem>
                <ListItem>The Abstract Syntax Tree (AST)</ListItem>
                <ListItem>The bytecode / opcode</ListItem>
            </List>
            <Appear>
                <Text fit>
                    Humbug implemnets its mutations by changing files of the filesystem
                </Text>
            </Appear>
            <Appear>
                <Text margin="30px">
                    Perhaps PHP 7 can change this
                </Text>
            </Appear>
        </div>
};

export const TestSelection = {
    slide: () =>
        <div>
            <Heading size={2} fit>
                Test Selection per mutation
            </Heading>
            <List>
            <Appear fid="1">
                <ListItem>Running all tests for each mutation is inefficient</ListItem>
            </Appear>
            <Appear fid="2">
                <ListItem>Before running tests, gather coverage data from phpunit</ListItem>
            </Appear>
            <Appear fid="3">
                <ListItem>Next only run the tests that cover the mutated code</ListItem>
            </Appear>
            <Appear fid="4">
                <ListItem>Stop testing a mutation as soon as at least 1 test fails</ListItem>
            </Appear>
            </List>
        </div>
};

export const Metrics = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 40px" >Metrics</Heading>
        <ShortList items={[
          <div><strong>Mutation Score Indicator (MSI):</strong><Text> percentage of mutants covered &amp; killed by tests</Text></div>,
          <div><strong>Mutation Code Coverage:</strong><Text> percentage of mutants covered by tests</Text></div>,
          <div><strong>Covered Code MSI:</strong><Text> percentage of killed mutants that were coverd by tests</Text></div>
        ]}
        />
      </div>
    );
  }
};

export const MetricsExample = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 20px" >Metrics Example</Heading>
        <Layout>
          <Fill>
              <Appear fid="1">
                  <div>
                      <Text textAlign="left" textSize="2rem"><strong>Tests: 361</strong></Text>
                      <Text textAlign="left" textSize="2rem"><strong>Line Coverage:</strong> 64.86%</Text>
                  </div>
              </Appear>
              <Appear fid="2">
                  <div>
                      <Text textAlign="left" textSize="2rem">653 <strong>Mutants</strong> were generated</Text>
                      <Text textAlign="left" textSize="2rem">284 mutants were <strong>killed</strong></Text>
                  </div>
              </Appear>
          </Fill>
          <Fill margin="0 0 0 40px">
              <Appear fid="3">
                  <div>
                      <Text textAlign="left" textSize="2rem">218 mutants were <strong>not covered</strong> by tests</Text>
                      <Text textAlign="left" textSize="2rem">131 covered mutants were <strong>not detected</strong></Text>
                      <Text textAlign="left" textSize="2rem">17 <strong>fatal errors</strong> were encountered</Text>
                      <Text textAlign="left" textSize="2rem">3 <strong>time outs</strong> were encountered</Text>
                  </div
                  >
              </Appear>
          </Fill>
        </Layout>
      </div>
    );
  }
};

export const MetricsExampleMSI = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 20px" size={3}>Mutation Score Indicator</Heading>
        <Text margin="30px 0" fit>Out of 653 <strong>mutants</strong>, 284 mutants were <strong>killed</strong>.</Text>
        <Appear fid="4">
            <div>
              <Math math="\text{msi} = \frac{\text{killed mutants}}{\text{total mutants}} = \frac{284}{653} = 0.47." />
            </div>
        </Appear>
      </div>
    );
  }
};

export const MetricsExampleMCC = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 20px" size={3}>Mutation Code Coverage</Heading>
        <Text margin="30px 0" fit>Out of 653 <strong>mutants</strong>, 218 mutants were <strong>not covered</strong>.</Text>
        <Appear fid="4">
            <div>
              <Math math="\text{mcc} = \frac{\text{covered mutants}}{\text{total mutants}} = \frac{653 - 218}{653} = 0.67." />
            </div>
        </Appear>
      </div>
    );
  }
};

export const MetricsExampleCCMSI = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 20px" size={3}>Covered Code MSI</Heading>
        <Text margin="30px 0" fit>Out of 653 <strong>mutants</strong>, 435 mutants were <strong>covered</strong> of which 284 were <strong>killed</strong>.</Text>
        <Appear fid="4">
            <div>
              <Math math="\text{cc msi} = \frac{\text{killed mutants}}{\text{covered mutants}} = \frac{284}{435} = 0.70." />
            </div>
        </Appear>
      </div>
    );
  }
};

export const MetricsExampleSummary = {
  slide: () =>
    <div>
      <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 20px" size={2}>A summary</Heading>
      <Text>
        A project with <strong>361 tests</strong> and <strong>65% code coverage</strong> <strong>653 mutants</strong> were generated of which only 47% were <strong>killed</strong> and only 67% were covered.
      </Text>
      <List>
        <ListItem><strong>Mutation Score Indicator</strong>: 47%</ListItem>
        <ListItem><strong>Mutation Code Coverage</strong>: 67%</ListItem>
        <ListItem><strong>Covered Code MSI</strong>: 70%</ListItem>
      </List>
    </div>
}
