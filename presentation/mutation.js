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

export const Introduction = {
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
    note: `
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
              <CodePane lang="php" source={require("raw!./../assets/codeSamples/mutation/goldMemberMutatedTest.example")} />
          </Appear>
          <Appear fid="3" >
              <Text>The new test has <strong>killed</strong> the mutant</Text>
          </Appear>
      </div>
    );
  }
};

export const MutationTesting = {
    note: `
When we automate this process we get Mutation testing
`,
    slide: () =>
        <div>
            <Heading fit size={1} textColor="secondary">Mutation Testing</Heading>
            <List style={{ listStyleType: "decimal" }}>
                <ListItem>Run the test suite, if something fails: stop and fix the code</ListItem>
                <ListItem>For each file, find and create all possible mutations</ListItem>
                <ListItem>For each mutant, run the testsutie on the mutated code</ListItem>
                <ListItem>Analyze the results</ListItem>
            </List>
        </div>
};

export const Mutation = {
    notes: `A mutation is a piece of code that has been mutated by a mutation operator`,
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
        <Heading>Equivalent Mutant</Heading>
        <CodePane lang="php" source={require("raw!./../assets/codeSamples/sum_is_zero.example")} margin="20px auto" padding="0 10px 0 0" />
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
                <ListItem><strong>Negated Conditionals</strong><br /> negates conditional, i.e. <Code>!===</Code> becomes <Code>===</Code></ListItem>
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
                <ListItem>For each mutant, run the testsutie on the mutated code</ListItem>
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
        <Appear fid="4">
            <div>
                <Text textAlign="left" textSize="2rem"><strong>Mutation Score Indicator (MSI):</strong> 47%</Text>
                <CodePane lang="php">
                    $msi = round(100 * $killedMutants / $toalMutants);
                </CodePane>
                {/* $vanquishedTotal = $killedCount + $timeoutCount + $errorCount;
                $measurableTotal = $totalCount - $uncoveredCount; // = $vanquishedTotal + $escapedCount

                $msi         = round(100 * ($vanquishedTotal / $totalCount));
                $coveredRate = round(100 * ($measurableTotal / $totalCount));
                $cc_msi      = round(100 * ($vanquishedTotal / $measurableTotal)); */}
            </div>
        </Appear>
        <Appear fid="5" >
            <div>
                <Text textAlign="left" textSize="2rem"><strong>Mutation Code Coverage:</strong> 67%</Text>
                <CodePane lang="php">
                    $mcc = round(100 * ($totalCount - $uncoveredCount) / $totalCount);
                </CodePane>
            </div>
        </Appear>
        <Appear fid="6">
            <div>
                <Text textAlign="left" textSize="2rem"><strong>Covered Code MSI</strong> 70%</Text>
                <CodePane lang="php" >
                    $cc_msi = round(100 * $killedCount / ($totalCount - $uncoveredCount));
                </CodePane>
            </div>
        </Appear>
        <Appear fid="7">
          <Text>
            <strong>47%</strong> of all mutations were detected versus <strong>65%</strong> line coverage.
          </Text>
        </Appear>
      </div>
    );
  }
};
