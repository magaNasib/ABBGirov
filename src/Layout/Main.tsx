import { Box, ChakraProvider, Container, VStack } from '@chakra-ui/react';
import React from 'react';

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box gridColumn="1/2" gridRow="2/3" p="0 48px 64px 48px" backgroundColor="#F2F2F7">
      <ChakraProvider >
        <Container maxW='6xl' centerContent>
          <VStack spacing={"20px"} align={"start"} >
            {children}
          </VStack>
        </Container>

      </ChakraProvider>

    </Box>
  );
};
