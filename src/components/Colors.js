import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Stack, Box, Text } from '@margaret-ui/core';
import { capitalize, orderBy } from 'lodash';

const Title = styled.h2``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.media.medium`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const Colors = () => {
  const { colors } = useTheme();

  const palette = Object.keys(colors).map(color => ({
    name: color,
    palette:
      typeof colors[color] === 'string'
        ? [{ tint: 0, color: colors[color] }]
        : Object.keys(colors[color]).map(tint => ({
            tint,
            color: colors[color][tint],
          })),
  }));

  return (
    <Stack direction="column" gap={2.5}>
      {orderBy(palette, ({ name }) => {
        if (['black', 'white'].includes(name)) {
          return -1;
        }

        return name;
      }).map(({ name, palette }) => (
        <div>
          <Title>{capitalize(name)}</Title>
          <Grid>
            {palette.map(({ tint, color }) => (
              <Stack gap={1}>
                <Box
                  style={{
                    backgroundColor: color,
                    boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
                  }}
                  height="60px"
                  width="60px"
                  borderRadius="default"
                />
                <Stack direction="column" alignY="center">
                  <Text fontWeight="bold">
                    {capitalize(name)} {Boolean(tint) && tint}
                  </Text>
                  <div>{color}</div>
                </Stack>
              </Stack>
            ))}
          </Grid>
        </div>
      ))}
    </Stack>
  );
};

export default Colors;
