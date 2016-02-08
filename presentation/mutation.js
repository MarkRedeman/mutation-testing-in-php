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
                  <CodePane lang="php" source={require("raw!./../assets/codeSamples/mutation/goldMemberTest.example")} margin="20px 0 20px 20px"/>
              </Fill>
          </Layout>
          <Appear fid="1">
              <Text>Still passes all assertions!</Text>
          </Appear>
          <Appear fid="2">
              <CodePane lang="php" source={require("raw!./../assets/codeSamples/mutation/goldMemberMutatedTest.example")} />
          </Appear>
      </div>
    );
  }
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

export const Mutation = {
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

export const Mutators = {
  slide: () => {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          Mutator
        </Heading>
        <Text fit>
          Operator that changes (mutates) a piece of code
        </Text>

        <Layout>
          <Fill>
              <Text textAlign="left"><strong>Increments</strong> Mutator</Text>
              <Text textAlign="left"><strong>Decrements</strong> Mutator</Text>
              <Text textAlign="left"><strong>Invert Negatives</strong> Mutator</Text>
              <Text textAlign="left"><strong>Return Values</strong> Mutator</Text>
          </Fill>
          <Fill>
              <Text textAlign="left"><strong>Math</strong> Mutator</Text>
              <Text textAlign="left"><strong>Negate</strong> Mutator</Text>
              <Text textAlign="left"><strong>Conditionals Boundary</strong> Mutator</Text>
              <Text textAlign="left"><strong>Remove Conditionals Values</strong> Mutator</Text>
          </Fill>
        </Layout>
      </div>
    );
  }
};

export const MathMutators = {
  slide: () => {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          Math Mutators
        </Heading>

        <MutationTable mutations={[
          { original: "+", mutated: "-" },
          { original: "-", mutated: "+" },
          { original: "*", mutated: "/" },
          { original: "/", mutated: "*" },
          { original: "%", mutated: "*" }
        ]}
        />
      </div>
    );
  }
};

export const ConditionalMutators = {
  slide: () => {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          Conditional Mutators
        </Heading>

        <MutationTable mutations={[
          { original: "==", mutated: "!="},
          { original: "!=", mutated: "=="},
          { original: "<=", mutated: "> "},
          { original: ">=", mutated: "< "},
          { original: "<", mutated: ">="},
          { original: ">", mutated: "<="}
        ]}
        />
      </div>
    );
  }
};

export const EtcMutators = {
  slide: () => {
    return (
        <Table>
            <TableRow textAlign="left">
                <TableHeaderItem bold textSize="2rem" margin="0 10px" textAlign="right">
                    Mutator
                </TableHeaderItem>
                <TableHeaderItem textSize="2rem" margin="0 10px">
                    description
                </TableHeaderItem>
            </TableRow>
            <TableRow textAlign="left">
                <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">
                    Negate Conditionals
                </TableItem>
                <TableItem textSize="2rem" margin="0 10px">
                    replace condition by <Code>! (condition)</Code>
                </TableItem>
            </TableRow>
            <TableRow textAlign="left">
                <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Remove Conditionals</TableItem>
                <TableItem textSize="2rem" margin="0 10px">
                    substitute conditional with <Code>true</Code> or <Code>false</Code>
                </TableItem>
            </TableRow>
            <TableRow textAlign="left">
                <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Increments</TableItem>
                <TableItem textSize="2rem" margin="0 10px">
                    increment numeric values by <Code>1</Code>
                </TableItem>
            </TableRow>
            <TableRow textAlign="left">
                <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Decrements</TableItem>
                <TableItem textSize="2rem" margin="0 10px">
                    decrement numeric values by <Code>1</Code>
                </TableItem>
            </TableRow>
            <TableRow textAlign="left">
                <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Invert Negatives</TableItem>
                <TableItem textSize="2rem" margin="0 10px">
                    multiply numeric values by <Code>-1</Code>
                </TableItem>
            </TableRow>
            <TableRow textAlign="left">
                <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Return Values</TableItem>
                <TableItem textSize="2rem" margin="0 10px">
                    remove <Code>return</Code> statements
                </TableItem>
            </TableRow>
        </Table>
    );
  }
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
        <Appear>
          <CodePane lang="php" source={require("raw!./../assets/codeSamples/metrics.example")} margin="20px auto"/>
        </Appear>
      </div>
    );
  }
};

export const MetricsExample = {
  slide: () => {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 40px" >Metrics Example</Heading>
        <Layout>
          <Fill>
              <Text textAlign="left" textSize="2rem"><strong>Tests: 361</strong></Text>
              <Text textAlign="left" textSize="2rem"><strong>Line Coverage:</strong> 64.86%</Text>
              <Text textAlign="left" textSize="2rem"><strong>Mutation Score Indicator (MSI):</strong> 47%</Text>
              <Text textAlign="left" textSize="2rem"><strong>Mutation Code Coverage:</strong> 67%</Text>
              <Text textAlign="left" textSize="2rem"><strong>Covered Code MSI</strong> 70%</Text>
          </Fill>
          <Fill margin="0 0 0 40px">
              <Text margin="0.25em 0 0.25em 20px" textAlign="left" textSize="2rem">653 <strong>Mutants</strong> were generated</Text>
              <Text margin="0.25em 0 0.25em 20px" textAlign="left" textSize="2rem">284 mutants were <strong>killed</strong></Text>
              <Text margin="0.25em 0 0.25em 20px" textAlign="left" textSize="2rem">218 mutants were <strong>not covered</strong> by tests</Text>
              <Text margin="0.25em 0 0.25em 20px" textAlign="left" textSize="2rem">131 covered mutants were <strong>not detected</strong></Text>
              <Text margin="0.25em 0 0.25em 20px" textAlign="left" textSize="2rem">17 <strong>fatal errors</strong> were encountered</Text>
              <Text margin="0.25em 0 0.25em 20px" textAlign="left" textSize="2rem">3 <strong>time outs</strong> were encountered</Text>
          </Fill>
        </Layout>
        <Appear>
          <Text>
            <strong>47%</strong> of all mutations were detected versus <strong>65%</strong> line coverage.
          </Text>
        </Appear>
      </div>
    );
  }
};
