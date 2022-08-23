import React from 'react';
import { MargaretProvider } from '@margaret-ui/core';
import '@fontsource/inter';
import '@fontsource/fira-code';

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <MargaretProvider theme={{}} colors={{}}>
      {children}
    </MargaretProvider>
  );
}
