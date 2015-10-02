import React from "react/addons";
import {
  Heading, List, ListItem, Text, Appear, CodePane, MutationTable, Code,
  Layout, Fill,
  Table, TableRow, TableHeaderItem, TableItem
} from "../src/spectacle";
import Slide from "./slide";
import ShortList from "./shortList";

export class Introduction extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          What is mutation testing?
        </Heading>
        <ShortList items={[
          "A tool to analyze stability of a piece of code",
          "Similar to code coverage, but better",
          "Can find missing tests"
        ]} />
      </div>
    );
  }
}

export class Example extends Slide {
  contents() {
    return (
      <div>
        <Heading textSize="2.5rem">A quick example</Heading>

        <CodePane lang="php" source={require("raw!./codeSamples/goldmember.example")} margin="20px auto" padding="0 10px 0 0" />
        <Appear>
          <CodePane lang="php" source={require("raw!./codeSamples/goldmember_mutated.example")} margin="20px auto" padding="0 10px 0 0" />
        </Appear>
      </div>
    );
  }
}

export class Example2 extends Slide {
  contents() {
    return (
      <div>
        <CodePane lang="php" source={require("raw!./codeSamples/goldmember_tested.example")} margin="20px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class Definitions extends Slide {
  contents() {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 40px" >Some Definitions</Heading>
      </div>
    );
  }
}

export class Mutation extends Slide {
  contents() {
    return (
      <div>
        <Heading fit size={1} textColor="secondary">Mutation</Heading>
        <Text>a piece of code that has been changed (mutated) by a mutator</Text>

        <List>
          <Appear><ListItem><strong>killed</strong> if at least 1 test fails</ListItem></Appear>
          <Appear><ListItem><strong>escaped</strong> if at all test pass</ListItem></Appear>
          <Appear><ListItem><strong>equivalent</strong> if there does not exist a test case which can distinguish the mutant from the original code</ListItem></Appear>

          <Appear>
          <ListItem><strong>uncovered</strong> mutant is not covered by a test</ListItem>
          <ListItem><strong>fatal</strong> mutant produces a fatal error</ListItem>
          <ListItem><strong>timout</strong> unit tests exceed allowed timeout</ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export class KilledMutant extends Slide {
  contents() {
    return (
      <div>
        <Heading>Killed Mutant</Heading>
        <CodePane lang="php" source={require("raw!./codeSamples/goldmember_killed.example")} margin="20px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class EscapedMutant extends Slide {
  contents() {
    return (
      <div>
        <Heading>Escaped Mutant</Heading>
        <CodePane lang="php" source={require("raw!./codeSamples/goldmember_escaped.example")} margin="20px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class EquivalentMutant extends Slide {
  contents() {
    return (
      <div>
        <Heading>Equivalent Mutant</Heading>
        <CodePane lang="php" source={require("raw!./codeSamples/sum_is_zero.example")} margin="20px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class Mutators extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          Mutator
        </Heading>
        <Text fit>
          Operator that changes (mutates) a piece of code
        </Text>

        <Appear>
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
        </Appear>
      </div>
    );
  }
}

export class MathMutators extends Slide {
  contents() {
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
        ]} />
      </div>
    );
  }
}

export class ConditionalMutators extends Slide {
  contents() {
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
        ]} />
      </div>
    );
  }
}

export class EtcMutators extends Slide {
  contents() {
    return (
      <Table>
        <TableRow textAlign="left">
          <TableHeaderItem bold textSize="2rem" margin="0 10px" textAlign="right">Mutator</TableHeaderItem>
          <TableHeaderItem textSize="2rem" margin="0 10px">description</TableHeaderItem>
        </TableRow>
        <TableRow textAlign="left">
          <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Negate Conditionals</TableItem>
          <TableItem textSize="2rem" margin="0 10px">replace condition by <Code>! (condition)</Code></TableItem>
        </TableRow>
        <TableRow textAlign="left">
          <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Remove Conditionals</TableItem>
          <TableItem textSize="2rem" margin="0 10px">substitute conditional with <Code>true</Code> or <Code>false</Code></TableItem>
        </TableRow>
        <TableRow textAlign="left">
          <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Increments</TableItem>:
          <TableItem textSize="2rem" margin="0 10px">crement numeric values by <Code>1</Code></TableItem>
        </TableRow>
        <TableRow textAlign="left">
          <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Decrements</TableItem>:
          <TableItem textSize="2rem" margin="0 10px">crement numeric values by <Code>1</Code></TableItem>
        </TableRow>
        <TableRow textAlign="left">
          <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Invert Negatives</TableItem>
          <TableItem textSize="2rem" margin="0 10px">multiply numeric values by <Code>-1</Code></TableItem>
        </TableRow>
        <TableRow textAlign="left">
          <TableItem bold textSize="2rem" margin="0 10px" textAlign="right">Return Values</TableItem>
          <TableItem textSize="2rem" margin="0 10px">remove <Code>return</Code> statements</TableItem>
        </TableRow>
      </Table>
    );
  }
}

export class Metrics extends Slide {
  contents() {
    return (
      <div>
        <Heading bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 40px" >Metrics</Heading>
        <ShortList items={[
          <div><strong>Mutation Score Indicator (MSI):</strong><Text> percentage of mutants covered &amp; killed by tests</Text></div>,
          <div><strong>Mutation Code Coverage:</strong><Text> percentage of mutants covered by tests</Text></div>,
          <div><strong>Covered Code MSI:</strong><Text> percentage of killed mutants that were coverd by tests</Text></div>
        ]} />

        <List>
          <ListItem><strong>Mutation Score Indicator (MSI):</strong> percentage of mutants covered &amp; killed by tests</ListItem>
          <ListItem><strong>Mutation Code Coverage:</strong> percentage of mutants covered by tests</ListItem>
          <ListItem><strong>Covered Code MSI:</strong> percentage of killed mutants that were coverd by tests</ListItem>
        </List>
        <Appear>
          <CodePane lang="php" source={require("raw!./codeSamples/metrics.example")} margin="20px auto"/>
        </Appear>
      </div>
    );
  }
}

export class MetricsExample extends Slide {
  contents() {
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
}

export class Issues extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} caps textColor="black" fit>
          Configuration issues
        </Heading>
        <Text>Currently humbug isn't stable</Text>
        <List>
          <ListItem>`phpunit` location</ListItem>
          <ListItem>Only support for phpunit</ListItem>
        </List>
      </div>
    );
  }
}
