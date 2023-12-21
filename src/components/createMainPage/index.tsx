import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Select
} from '@chakra-ui/react';
import { useAppContext } from 'context';
import { Footer } from 'Layout/Footer';
import { IFormValues } from 'pages/Create';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import MyDatePicker from 'components/UI/MyDatePicker';
import { MyInput } from 'components/UI/MyInput';

// interface IFormValues {
//   customerId: number;
//   customerName: string;
//   product: string;
//   value: number;
//   description: string;
//   currency: string;
//   startDate: string;
//   category: string;
//   endDate: string;
// }

export type InputProps = {
  placeholder?: string;
  type?: string;
  label: string;
  disabled?: boolean;
  value?: string | number;
  onChange: any;
  // onBlur: Noop
};

const fetchCustomerData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const fetchProductData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
export interface IProps { }




const CreateMain: React.FC<IProps> = () => {
  const { colletralCode } = useParams();
  const methods = useFormContext<IFormValues>();

  const navigate = useNavigate();

  const category = methods.watch('category');
  const customerId = methods.watch('customerId');
  const isValidCustomerId = customerId && /^\d+$/.test(customerId.toString()) && customerId.toString().length > 6 && customerId.toString().length < 8;
  const apiUrl = `http://localhost:8082/customers/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/${customerId}`;
  const { data, error,isLoading:isCustomerIdLoading } = useSWR(isValidCustomerId ? apiUrl : null, fetchCustomerData);
  const { data: productData, error: productDataError,isLoading:isCategoryLoading } = useSWR(
    category ? `http://localhost:8082/products/product-code/${category}` : null,
    fetchProductData
  );
  //   const [{ isCreateButttonExist }] = useAppContext();
  const [{ setIsCreateButtonExist }] = useAppContext();
  const postFormattedData = async (formattedData) => {
    try {
      const response = await fetch('http://localhost:8082/pledges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });
      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const onSubmitHandler = methods.handleSubmit(async (requestData) => {
    const formattedData = {
      customerCIF: requestData.customerId.toString(),
      fullname: data.fullname,
      colletralCode: requestData.category,
      customerPledge: {
        describe: requestData.description,
        pledgesValue: requestData.value,
        pledgedCurrency: requestData.currency,
        startDate: new Date(requestData.startDate),
        endDate: new Date(requestData.endDate)
      },
      data: [
        {
          productCode: productData.product,
          deposit: [],
          questions: []
        }
      ]
    };

    console.log(formattedData);
    setIsCreateButtonExist(true);
    navigate(`${data?.category}`);
    if(!colletralCode) return
    const response: any = await postFormattedData(formattedData);
    navigate(`${response?.data}/successPage`);
  });

  return (
    <>
      {productDataError && <div>Error !</div>}

      <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto" mt="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Girovun yaradılması
            </Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.customerId}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: /^\d{7}$/,
                  minLength: { value: 7, message: 'Customer number must be 7 digits long' },
                  maxLength: { value: 7, message: 'Customer number must be 7 digits long' }
                }}
                name="customerId"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    value={field.value}
                    label="Müştəri nömrəsi"
                    placeholder="Daxil edin"
                    onChange={field.onChange}
                  />
                )}
              />
              {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>}
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.customerId?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.customerId}>
              <Controller
                control={methods.control}
                name="customerName"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    value={data ? data.fullname : 'Müştəri'}
                    placeholder="Ad Soyad Ata adı"
                    isLoading={isCustomerIdLoading}
                    disabled
                    label="Müştərinin adı"
                  />
                )}
              />
              {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>}

              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.customerId?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormLabel>Girovun kateqoriyası</FormLabel>
            <FormControl isInvalid={!!methods.formState.errors.category}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="category"
                render={({ field }) => (
                  <Select
                    placeholder="Seçin"
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                    {...field}
                  >
                    <option value={'99743'}>99743</option>
                    <option value={'99745'}>99745</option>
                  </Select>
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.category?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.category}>
              <Controller
                control={methods.control}
                name="product"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    disabled={true}
                    isLoading={isCategoryLoading}
                    value={productData ? productData.product : 'Məhsul'}
                    label="Məhsul"
                  />
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.category?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.value}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a valid number',
                  },
                }}
                name="value"
                render={({ field }) => <MyInput {...field} placeholder="Daxil edin" label="Girovun dəyəri" />}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors?.value?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.description}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="description"
                render={({ field }) => <MyInput placeholder="Daxil edin" {...field} label="Girovun təsviri" />}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors['description']?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormLabel>Girovun valyutası</FormLabel>
            <FormControl isInvalid={!!methods.formState.errors.currency}>
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
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors['currency']?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.startDate}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^\d+$/,  
                    message: 'Please enter a valid number',
                  },
                }}
                name="startDate"
                render={({ field }) => (
                  <MyDatePicker field={field} label="Başlama tarixi" />
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.startDate?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.endDate}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^\d+$/,  
                    message: 'Please enter a valid number',
                  },
                }}
                name="endDate"
                render={({ field }) => (
                  <MyDatePicker field={field} label="Bitmə tarixi" />
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.endDate?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>
      </Box >
      {!colletralCode && <Footer onSubmitHandler={onSubmitHandler} isCreateMode={!!colletralCode} />
      }
    </>
  );
};

export default CreateMain;
