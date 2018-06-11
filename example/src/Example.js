import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Flex, Box, Relative, Absolute } from "rebass";

const StyledLiveError = styled(LiveError)`
  background-color: red;
  color: white;

  padding: 8px 16px;
  margin-top: 8px;

  border-radius: 4px;
`;

const StyledLiveEditor = styled(LiveEditor)`
  border-radius: 4px;
  padding: 8px 16px !important;

  font-size: 14px;
`;

const StyledLivePreview = styled(LivePreview)`
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Example = ({ code, scope }) => (
  <Flex p={[2, 3]} flexDirection="column">
    <LiveProvider scope={scope} code={code}>
      <Flex flexDirection={["column", "row"]}>
        <Box flex="1">
          <Relative>
            <StyledLiveEditor />

            <Absolute
              bottom="0"
              left="0"
              right="0"
              style={{ transform: "translateY(100%)" }}
            >
              <StyledLiveError />
            </Absolute>
          </Relative>
        </Box>

        <Box flex="1" pl={[0, 4]} pt={[2, 0]}>
          <StyledLivePreview />
        </Box>
      </Flex>
    </LiveProvider>
  </Flex>
);

export default Example;
