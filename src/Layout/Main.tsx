import { Box } from '@chakra-ui/react';
import React from 'react';

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box gridColumn="1/2" gridRow="2/3" p="0 48px 64px 48px" backgroundColor="#f3f3f3">
      {children}
    </Box>
  );
};
