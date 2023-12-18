import { Box, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select } from '@chakra-ui/react';
import DepositInfo from 'components/DepositInfo';
import React from 'react';

interface IProps {
  data?: any;
  error?: any;
}
const OtherInformation: React.FC<IProps> = ({ data, error }) => {
  return (
    <>
      <Box padding="24px" bg="white" borderRadius="12px" margin="0 44px" mt="20px" w={'100%'}>
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Digər məlumatlar
            </Heading>
          </GridItem>
      
          {data.data[0].questions.map((question,index) => (
            question.type === "select" ?  <GridItem key={index} colSpan={1}>
            <FormControl>
              <FormLabel>{question.value}</FormLabel>
              <Select  placeholder="Daxil edin" >
                {question.items.map(({key,value}) => (
                    <option key={key} value={value}>{value}</option>
                ))}
           
              </Select>
            </FormControl>
          </GridItem>  : <GridItem key={index} colSpan={1}>
            <FormControl>
              <FormLabel>{question.value}</FormLabel>
              <Input type={question.type} placeholder="Daxil edin" />
            </FormControl>
          </GridItem>
           
          ))}
      </Grid>

      {data.data[0].deposit.length && <DepositInfo/>}
      </Box>
    </>
  );
};

export default OtherInformation;
