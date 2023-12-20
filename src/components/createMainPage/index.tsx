import { Box, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text } from '@chakra-ui/react';
import { useAppContext } from 'context';
import { Footer } from 'Layout/Footer';
import React from 'react';
// import DatePicker from 'react-date-picker';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

import DatePicker from 'react-datepicker';
import { chakra } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    _placeholder: {
      color: '#0D0D19',
      fontWeight: '500',

    },
    width:"100%",
    marginTop: '32px',
    padding: '6px',
    ':focus': {
      outline: '3px solid blue',
      borderRadius: '2px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
      border: 'none'
    },
    border: '2px solid #d3d3d3',
    borderRadius: '5px'
    
  },
});
const CustomDatePicker = ({ className, ...props }) => {
  return (
    <ChakraDatePicker
      onChange={undefined} className={`custom-datepicker ${className || ''}`}
      {...props}
    />
  );
};
CustomDatePicker.propTypes = {
  className: PropTypes.string,
};

interface IFormValues {
  customerId: number;
  customerName: string;
  product: string;
  value: number;
  description: string;
  currency: string;
  startDate: string;
  category: string;
  endDate: string;
}

interface IProps { }

export type InputProps = {
  placeholder?: string;
  type?: string;
  label: string;
  disabled?: boolean;
  value?: string | number;
  onChange: any;
  // onBlur: Noop
};

export const MyInput = ({ label, ...props }: InputProps) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input {...props} />
  </FormControl>
);

const fetchCustomerData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const fetchProductData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const CreateMain: React.FC<IProps> = () => {
  const methods = useForm<IFormValues>();

  const { colletralCode } = useParams();

  const navigate = useNavigate();

  const category = methods.watch('category');
  const customerId = methods.watch('customerId');

  const apiUrl = `http://localhost:8082/customers/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/${customerId}`;
  const { data, error } = useSWR(customerId ? apiUrl : null, fetchCustomerData);
  const { data: productData, error: productDataError } = useSWR(
    category ? `http://localhost:8082/products/product-code/${category}` : null,
    fetchProductData
  );
  //   const [{ isCreateButttonExist }] = useAppContext();
  const [{ setIsCreateButtonExist }] = useAppContext();

  const onSubmitHandler = methods.handleSubmit((data) => {
    setIsCreateButtonExist(true);
    navigate(`${data?.category}`);
  });

  return (
    <>

      {productDataError && <div>Error !</div>}

      <FormProvider {...methods}>
        <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto" mt="20px">
          <Grid templateColumns="repeat(3, 1fr)" gap="24px">
            <GridItem colSpan={3}>
              <Heading as="h3" size="lg">
                Girovun yaradılması
              </Heading>
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: /^\d{7}$/,
                  minLength: { value: 7, message: 'Customer number must be 7 digits long' },
                  maxLength: { value: 7, message: 'Customer number must be 7 digits long' }
                }}
                name="customerId"
                render={({ field: { onChange } }) => (
                  <MyInput
                    label="Müştəri nömrəsi"
                    placeholder="Daxil edin"
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                )}
              />
              {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>}
              {methods.formState.errors['Müştəri nömrəsi'] && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors['Müştəri nömrəsi'].message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                name="customerName"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    value={data ? data.fullname : 'Müştəri'}
                    placeholder="Ad Soyad Ata adı"
                    disabled
                    label="Müştərinin adı"
                  />
                )}
              />
              {methods.formState.errors['Müştərinin adı'] && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors['Müştərinin adı'].message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Girovun kateqoriyası</FormLabel>
                <Controller
                  control={methods.control}
                  rules={{
                    required: 'This field is required'
                  }}
                  name="category"
                  render={({ field: { onChange } }) => (
                    <Select
                      placeholder="Seçin"
                      onChange={(e) => {
                        onChange(e);
                      }}
                    >
                      <option value={'99743'}>99743</option>
                      <option value={'99745'}>99745</option>
                    </Select>
                  )}
                />
                {methods.formState.errors['Girovun kateqoriyası'] && (
                  <Text color={'red'} fontSize={'14px'}>
                    {methods.formState.errors['Girovun kateqoriyası'].message}
                  </Text>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                name="product"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    disabled={true}
                    value={productData ? productData.product : 'Müştəri'}
                    label="Məhsul"
                  />
                )}
              />
              {methods.formState.errors.product && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors.product.message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="value"
                render={({ field }) => <MyInput {...field} placeholder="Daxil edin" label="Girovun dəyəri" />}
              />
              {methods.formState.errors['value'] && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors['value'].message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="description"
                render={({ field }) => <MyInput placeholder="Daxil edin" {...field} label="Girovun təsviri" />}
              />
              {methods.formState.errors['description'] && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors['description'].message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Girovun valyutası</FormLabel>

                <Controller
                  control={methods.control}
                  rules={{
                    required: 'This field is required'
                  }}
                  name="currency"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select placeholder="Seçin" onChange={onChange} onBlur={onBlur} value={value}>
                      <option value="1">AZN</option>
                      <option value="2">USD</option>
                    </Select>
                  )}
                />
                {methods.formState.errors['currency'] && (
                  <Text color={'red'} fontSize={'14px'}>
                    {methods.formState.errors['currency'].message}
                  </Text>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="startDate"
                render={({ field }) => (
                  <CustomDatePicker
                    className="text-black"
                    onChange={(date: unknown) => console.log(date)}
                    selected={field.value}
                    placeholderText="Başlama tarixi"
                    {...field}
                    type="datetime-local"
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showMonthDropdown
                  />

                )}
              />
              {methods.formState.errors['startDate'] && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors['startDate'].message}
                </Text>
              )}
            </GridItem>
            <GridItem colSpan={1}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="endDate"
                render={({ field }) => (
                  <CustomDatePicker
                    className="text-black"
                    onChange={(date: unknown) => console.log(date)}
                    selected={field.value}
                    placeholderText="Bitmə tarixi"
                    {...field}
                    type="datetime-local"
                    showYearDropdown
                    showMonthDropdown
                    scrollableMonthYearDropdown
                  />
                )}
              />
              {methods.formState.errors['endDate'] && (
                <Text color={'red'} fontSize={'14px'}>
                  {methods.formState.errors['endDate'].message}
                </Text>
              )}
            </GridItem>
          </Grid>
        </Box>

        {!colletralCode && <Footer onSubmitHandler={onSubmitHandler} />}
      </FormProvider>
    </>
  );
};

export default CreateMain;
