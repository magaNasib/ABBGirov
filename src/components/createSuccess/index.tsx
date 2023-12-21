import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ModaLSuccess from 'icons/ModalSuccess';

function CreateSuccessComponent() {
  return (
    <Box w={'100%'} padding="0 44px">
      <Heading as="h4" size="md" margin="32px 0">
        Girovun yaradılmasinin nəticəsi
      </Heading>
      <Box
        padding="40px 24px"
        bg="white"
        borderRadius="12px"
        display="flex"
        flexDirection="column"
        gap="24px"
        alignItems="center"
        justifyContent="center"
      >
        <ModaLSuccess width='64' height='64'/>
        <Heading as="h4" size="md">
          Girov yaradıldı
        </Heading>
        <Text color="black">
          Girov nömrəsi:{' '}
          <Text as="span" color="#3B8DD4">
            111222333
          </Text>
        </Text>
      </Box>
      <Box mt="20px" mb="20px" className="bottomBar">
        <Grid templateColumns="2fr 2fr" display="flex" justifyContent="space-between">
          <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end">
            <Button mt={'12px'} color={'#fff'} bg={'blue'}>
              Son
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default CreateSuccessComponent;
