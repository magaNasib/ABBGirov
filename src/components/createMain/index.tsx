import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select } from '@chakra-ui/react';
import { useAppContext } from 'context';
import React from 'react';
import useSWR from 'swr';

const fetchCustomerData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchProductData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
interface IProps {
  setOtherDetailsOpen?: (open: boolean) => void;
  otherDetailsOpen?: boolean;
  colletralCode?: string;
  setCollettralCode?: any;
}

const CreateMain: React.FC<IProps> = ({ setOtherDetailsOpen, otherDetailsOpen, colletralCode, setCollettralCode }) => {
  console.log('colletralCodeCreateMain', colletralCode);
  const [customerId, setCustomerId] = React.useState('');
  const apiUrl = `http://localhost:8082/customers/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/${customerId}`;
  const { data, error } = useSWR(customerId ? apiUrl : null, fetchCustomerData);
  const { data: productData, error: productDataError } = useSWR(
    colletralCode ? `http://localhost:8082/products/product-code/${colletralCode}` : null,
    fetchProductData
  );
const [{isCreateButttonExist}] = useAppContext();
const [{setIsCreateButtonExist}] = useAppContext();


  const handleInputChange = (event) => {
    setCustomerId(event.target.value);
  };
  const handleSelectChange = (event) => {
    setCollettralCode(event.target.value);
  };

  const handleCreateButton = () => {
    setOtherDetailsOpen(true);
    setIsCreateButtonExist(false)

  };
  return (
    <>
      {error && <div>Error fetching customer data</div>}
      {productDataError && <div>Error !</div>}

      <Box padding="24px" bg="white" borderRadius="12px" margin="0 44px" mt="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Girov haqqında məlumatlar
            </Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Müştəri nömrəsi</FormLabel>
              <Input onChange={handleInputChange} type="number" placeholder="Daxil edin" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Müştərinin adı</FormLabel>
              <Input value={data ? data.fullname : 'Müştəri'} type="text" disabled placeholder="Daxil edin" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Girovun kateqoriyası</FormLabel>
              <Select onChange={handleSelectChange} placeholder="Seçin">
                <option>99743</option>
                <option>99745</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Məhsul</FormLabel>
              <Input
                value={productData ? productData.product : 'Müştəri'}
                type="text"
                disabled
                placeholder="Daxil edin"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Girovun dəyəri</FormLabel>
              <Input type="number " placeholder="Daxil edin" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Girovun təsviri</FormLabel>
              <Input type="text" placeholder="Daxil edin" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Girovun valyutası</FormLabel>
              <Select placeholder="Seçin">
                <option>AZN</option>
                <option>USD</option>
                <option>EUR</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Başlama tarixi</FormLabel>
              <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Bitmə tarixi</FormLabel>
              <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
            </FormControl>
          </GridItem>
        </Grid>
      </Box>
      <Box mt="20px" mb="20px" className="bottomBar"></Box>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Button marginLeft={'20px'} px={'10px'} py={'10px'} color={'#fff'} borderRadius={'5px'} bg={'red'}>
          Ləvğ et
        </Button>
        
        {isCreateButttonExist && <Button 
          onClick={() => {
            handleCreateButton();
          }}
          marginRight={'20px'}
          px={'10px'}
          py={'10px'}
          color={'#fff'}
          borderRadius={'5px'}
          bg={'blue'}
        >
          Yarat
        </Button>}
      </Flex>
    </>
  );
};

export default CreateMain;
