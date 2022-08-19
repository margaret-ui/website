import React from 'react';
import styled from 'styled-components';
import { Stack } from '@margaret-ui/core';

const PropName = styled.div`
  code {
    background-color: var(--ifm-color-secondary-lightest);
    color: var(--ifm-color-secondary);
    border: 0;
    padding: 4px 8px;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--ifm-toc-border-color);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(8em, max-content) 1fr;
  width: 100%;
  grid-gap: ${({ theme }) => theme.spacing(0.5)};

  code {
    background-color: transparent;
    color: var(--ifm-color-secondary);
    border: 0;
    vertical-align: unset;
  }
`;

const Prop = ({ name, description, type }) => (
  <Stack direction="column" gap={0.5} marginBottom={1}>
    <PropName>
      <code>{name}</code>
    </PropName>
    <Separator />
    <Grid>
      {Boolean(description) && (
        <>
          <div>Description</div>
          <div>{description}</div>
        </>
      )}
      {Boolean(type) && (
        <>
          <div>Type</div>
          <div>
            <code>{type}</code>
          </div>
        </>
      )}
    </Grid>
  </Stack>
);

const Props = ({ children }) => (
  <Stack direction="column" gap={1.75}>
    {children}
  </Stack>
);

Props.Prop = Prop;

export default Props;
