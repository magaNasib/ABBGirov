import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IFormValues } from 'pages/Create';

export const Footer = ({ onSubmitHandler, isCreateMode, mode = 'create' }) => {
  console.log(mode);
  
  const methods = useFormContext<IFormValues>();
  const isEdit = mode === 'edit'
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
          <Button padding={'.5rem 1rem'} color={'#fff'} bg={'red'} type="reset" onClick={() => {
            methods.reset()
          }}>
            Ləvğ et
          </Button>
        </GridItem>
        <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end">

          <Button padding={'.5rem 1rem'} color={'#fff'} bg={'blue'} type="submit" onClick={onSubmitHandler}>
          {isEdit?'Təsdiq et':(isCreateMode ? 'Yarat' : 'Növbəti')}
          </Button>

        </GridItem>
      </Grid>
    </Box>
  );
};
