import React from 'react';
import { MargaretProvider } from '@margaret-ui/core';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Inter";

  code {
    border: 0;
    color: var(--ifm-color-secondary);
    background-color: transparent;
    padding: 0;
    vertical-align: unset;
  }
}
`;

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <MargaretProvider theme={{}} colors={{}}>
      <GlobalStyle />
      {children}
    </MargaretProvider>
  );
}
