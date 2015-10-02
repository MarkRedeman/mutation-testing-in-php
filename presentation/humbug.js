import React from "react/addons";
import {Heading, Layout, Text, Appear, List, ListItem, CodePane, Code, Fill, Link,
  Table, TableRow, TableHeaderItem, TableItem
} from "../src/spectacle";
import Slide from "./slide";

export class Introduction extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} caps textColor="secondary" fit>
          Humbug
        </Heading>
        <Heading size={2} fit textColor="tertiary">
           A Mutation Testing framework for PHP
        </Heading>
        <Text fit>
          Measures the real effectiveness of your test suites and assist in their improvement.<br/>
        </Text>
        <Appear>
          <Text fit>
            It eats Code Coverage for breakfast
          </Text>
        </Appear>
      </div>
    );
  }
}


export class Installation extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1} fit>Installation</Heading>
        <List>
          <ListItem>
            <strong>Git:</strong>
          </ListItem>
          <CodePane lang="bash" source={require("raw!./codeSamples/installation/git.example")} margin="20px auto" padding="0 10px 0 0" />

          <ListItem>
            <strong>Phar:</strong>
          </ListItem>
          <CodePane lang="bash" source={require("raw!./codeSamples/installation/phar.example")} margin="20px auto" padding="0 10px 0 0" />

          <ListItem>
            <strong>Composer:</strong>
          </ListItem>
          <CodePane lang="bash" source={require("raw!./codeSamples/installation/composer.example")} margin="20px auto" padding="0 10px 0 0" />
        </List>
      </div>
    );
  }
}

export class Configuration extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1}>Configuration</Heading>
        <CodePane lang="bash" source={require("raw!./codeSamples/configuration.example")} margin="40px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class Running extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1}>Running Humbug</Heading>
        <CodePane lang="bash" source={require("raw!./codeSamples/running.example")} margin="40px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class Analyzing extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1}>Analyzing Humbug</Heading>
        <Text>humbug.log.txt</Text>
        <CodePane lang="bash" source={require("raw!./codeSamples/analyzing_txt.example")} margin="40px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class AnalyzingJson extends Slide {
  contents() {
    return (
      <div>
        <Text>humbug.log.json</Text>
        <CodePane lang="bash" source={require("raw!./codeSamples/analyzing_json.example")} margin="40px auto" padding="0 10px 0 0" />
      </div>
    );
  }
}

export class Options extends Slide {
  contents() {
    return (
      <div>
        <Heading size={1}>Options</Heading>
        <List>
          <ListItem textSize="2rem">
            <strong>Timeout:</strong><br />
            <Code>humbug --timeout=10</Code>
          </ListItem>
          <Appear>
            <ListItem textSize="2rem">
              <strong>Restricting files:</strong><br />
              <Code>humbug --file=PrimeFactor.php</Code><br/>
              <Code>humbug --file=*Driver.php</Code>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem textSize="2rem">
              <strong>Incremental analysis:</strong><br />
              <Code>humbug --incremental</Code><br/>
              Can off significant performance boosts by caching previous results in <Code>/home/padraic/.humbug.</Code>.
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export class Mutators extends Slide {
  contents() {
    return (
      <div>
        <Heading margin="0 0 .25em 0" size={1}>Mutators</Heading>
        <Layout>
          <Fill>
              <Text>Binary Arithmetic</Text>
              <Text>Boolean Substitution</Text>
              <Text>Conditional Boundaries</Text>
              <Text>Negated Conditionals</Text>
          </Fill>

          <Fill>
              <Text>Increments</Text>
              <Text>Return Values</Text>
              <Text>Literal Numbers</Text>
              <Text>If Statements</Text>
          </Fill>
        </Layout>
      </div>
    );
  }
}

export class Results extends Slide {
  contents() {
    return (
      <div>
        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Humbug test results
          </Heading>
          <Table textSize=".8rem" margin="2rem 0">
            <TableRow>
              <TableHeaderItem textAlign="left">Package</TableHeaderItem>
              <TableHeaderItem textAlign="right">LC</TableHeaderItem>
              <TableHeaderItem textAlign="right">MSI</TableHeaderItem>
              <TableHeaderItem textAlign="right">MCC</TableHeaderItem>
              <TableHeaderItem textAlign="right">CCM</TableHeaderItem>
              <TableHeaderItem textAlign="left">Execution time</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/briannesbitt/Carbon" textColor="secondary">
                  carbon/carbon
                </Link>
              </TableItem>
              <TableItem textAlign="right">61%</TableItem>
              <TableItem textAlign="right">95%</TableItem>
              <TableItem textAlign="right">100%</TableItem>
              <TableItem textAlign="right">95%</TableItem>
              <TableItem textAlign="left">2.25m</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/symfony/event-dispatcher" textColor="secondary">
                  symfony/event-dispatcher
                </Link>
              </TableItem>
              <TableItem textAlign="right">85%</TableItem>
              <TableItem textAlign="right">54%</TableItem>
              <TableItem textAlign="right">69%</TableItem>
              <TableItem textAlign="right">78%</TableItem>
              <TableItem textAlign="left">20s</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/HylianShield/validator" textColor="secondary">
                  hylianshield/validator
                </Link>
              </TableItem>
              <TableItem textAlign="right">100%</TableItem>
              <TableItem textAlign="right">75%</TableItem>
              <TableItem textAlign="right">89%</TableItem>
              <TableItem textAlign="right">85%</TableItem>
              <TableItem textAlign="left">1.35m</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/mathiasverraes/money" textColor="secondary">
                  mathiasverraes/money
                </Link>
              </TableItem>
              <TableItem textAlign="right">96%</TableItem>
              <TableItem textAlign="right">92%</TableItem>
              <TableItem textAlign="right">100%</TableItem>
              <TableItem textAlign="right">92%</TableItem>
              <TableItem textAlign="left">16.9s</TableItem>
            </TableRow>

            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/thephpleague/fractal" textColor="secondary">
                  thephpleague/fractal
                </Link>
              </TableItem>
              <TableItem textAlign="right">98%</TableItem>
              <TableItem textAlign="right">84%</TableItem>
              <TableItem textAlign="right">98%</TableItem>
              <TableItem textAlign="right">85%</TableItem>
              <TableItem textAlign="left">31s</TableItem>
            </TableRow>

            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/qandidate-labs/broadway-demo/" textColor="secondary">
                  broadway/broadway-demo
                </Link>
              </TableItem>
              <TableItem textAlign="right">96%</TableItem>
              <TableItem textAlign="right">88%</TableItem>
              <TableItem textAlign="right">92%</TableItem>
              <TableItem textAlign="right">86%</TableItem>
              <TableItem textAlign="left">5s</TableItem>
            </TableRow>

            <TableRow>
              <TableItem textAlign="left">
                <Link href="https://github.com/qandidate-labs/broadway/" textColor="secondary">
                  broadway/broadway
                </Link>
              </TableItem>
              <TableItem textAlign="right">57%</TableItem>
              <TableItem textAlign="right">49%</TableItem>
              <TableItem textAlign="right">56%</TableItem>
              <TableItem textAlign="right">87%</TableItem>
              <TableItem textAlign="left">46s</TableItem>
            </TableRow>

          </Table>
          <Text textSize="1.5rem" textAlign="left">
            Line Coverage (LC),
            Mutation Score Indicator (MSI),
            Mutation Code Coverage (MCC),
            Covered Code MSI (CCM)<br/>
            Timout option set to 2 seconds.
          </Text>
      </div>
    );
  }
}


