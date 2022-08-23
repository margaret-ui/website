import React from 'react';
import * as MargaretCore from '@margaret-ui/core';
import { IoBulbOutline, IoChevronForwardOutline } from 'react-icons/io5';

const ReactLiveScope = {
  React,
  ...React,
  ...MargaretCore,
  IoBulbOutline,
  IoChevronForwardOutline,
};

export default ReactLiveScope;
