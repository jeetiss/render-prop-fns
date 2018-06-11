import React from "react";
import { Provider, Heading, Text, Container, Flex, Box } from "rebass";
import styled, { injectGlobal } from "styled-components";
import { Toggler, Counter } from "render-prop-fns";
import Example from "./Example";
import { Button, Content } from "./Button";

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const toggleExample = `
<Toggler>
  {({ value, toggle }) => (
    <Button onClick={toggle}>
      <Content active={!value}>
        Click me!!!
      </Content>
      
      <Content active={value}>
        Nice work
      </Content>
    </Button>
  )}
</Toggler>

`;

const counterExample = `
<Counter max={4}>
  {({ value, inc }) => (
    <Button onClick={inc}>
      <Content active={value === 0}>Click me!!!</Content>

      <Content active={value === 1}>Click me ones again</Content>

      <Content active={value === 2}>And ones again</Content>

      <Content active={value === 3}>Ok. Now stop!</Content>

      <Content active={value === 4}>Are you a fool?</Content>
    </Button>
  )}
</Counter>

`;

const App = () => (
  <Provider
    theme={{
      breakpoints: [48, 80].map(n => n + "em")
    }}
  >
    <Box bg="#1D1F21" color="white">
      <Container>
        <Flex px={[2, 3]} py={[4, 5]} flexDirection="column">
          <Box>
            <Heading fontSize={[4, 5, 6]}>Render-Prop-Fns</Heading>
          </Box>

          <Box py={[1, 3]}>
            <Text>helpfull render props components for you usage</Text>
          </Box>
        </Flex>
      </Container>
    </Box>

    <Container>
      <Example scope={{ Toggler, Button, Content }} code={toggleExample} />
      <Example scope={{ Counter, Button, Content }} code={counterExample} />
    </Container>
  </Provider>
);

export default App;
