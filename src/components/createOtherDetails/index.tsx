import { Box, Grid, GridItem, Heading, Select, Text } from '@chakra-ui/react';
import { MyInput } from 'components/createMainPage';
import DepositInfo from 'components/DepositInfo';
// import DepositInfo from 'components/DepositInfo';
import { Footer } from 'Layout/Footer';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IFormValues {
  'Daşınmaz əmlakın növü': string;
  Mülkiyyətçi: string;
  'Əmlak - ümumi məlumat': string;
  'Tikinti şirkətinin adı': string;
  Şəhər: string;
  Rayon: string;
  Bələdiyyə: string;
  'Qəsəbə/Kənd': string;
  'Tikintinin layihəsi': string;
  'Torpaq təyinatı': string;
}

import useSWR from 'swr';

const fetchPledgesData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

function OtherInformation() {
  const { colletralCode } = useParams();
  const { data: pledgeData } = useSWR(`http://localhost:8082/pledges/${colletralCode}`, fetchPledgesData);

  const methods = useForm<IFormValues>();

  const onSubmitHandler = methods.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <FormProvider {...methods}>
      {pledgeData?.data[0].deposit.length && <DepositInfo />}
      <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto">
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Digər məlumatlar
            </Heading>
          </GridItem>

          {pledgeData?.data[0].questions.map((question, index) => {
            console.log();

            return question.type === 'select' ? (
              <GridItem key={index} colSpan={1}>
                <Controller
                  control={methods.control}
                  rules={{
                    required: 'This field is required'
                  }}
                  //
                  name={question.key}
                  render={({ field }) => (
                    <>
                      <label>{question.value}</label>
                      <Select placeholder="Seçin" {...field}>
                        {question.items.map(({ key, value }) => (
                          <option key={key}>{value}</option>
                        ))}
                      </Select>
                    </>
                  )}
                />
                {methods.formState.errors['Daşınmaz əmlakın növü'] && (
                  <Text color={'red'} fontSize={'14px'}>
                    {methods.formState.errors['Daşınmaz əmlakın növü'].message}
                  </Text>
                )}
              </GridItem>
            ) : (
              <GridItem key={index} colSpan={1}>
                <Controller
                  control={methods.control}
                  rules={{
                    required: 'This field is required'
                  }}
                  name={question.key}
                  render={({ field }) => <MyInput {...field} placeholder="Daxil edin" label={question.value} />}
                />
                {methods.formState.errors[question.value] && (
                  <Text color={'red'} fontSize={'14px'}>
                    {methods.formState.errors[question.value].message}
                  </Text>
                )}
              </GridItem>
            );
          })}
        </Grid>
      </Box>

      <Footer onSubmitHandler={onSubmitHandler} />
    </FormProvider>
  );
}

export default OtherInformation;
