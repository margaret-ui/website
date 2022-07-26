import React from 'react';
import { MargaretProvider } from '@margaret-ui/core';

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <MargaretProvider theme={{}} colors={{}}>
      {children}
    </MargaretProvider>
  );
}
