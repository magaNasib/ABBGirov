import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

export const Footer = ({ onSubmitHandler, isCreateMode }) => {
  return (
    <Box mt="20px" mb="20px" className="bottomBar" bg={'white'} borderRadius="12px" w="100%">
      <Grid
        templateColumns="2fr 2fr"
        alignItems={'center'}
        display="flex"
        padding={'1rem 2rem'}
        justifyContent="space-between"
      >
        <GridItem>
          <Button padding={'.5rem 1rem'} type="reset" colorScheme="red">
            Ləvğ et
          </Button>
        </GridItem>
        <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end">

          <Button padding={'.5rem 1rem'} type="submit" onClick={onSubmitHandler}>
            {isCreateMode ? 'Yarat' : 'Next'}
          </Button>

        </GridItem>
      </Grid>
    </Box>
  );
};
