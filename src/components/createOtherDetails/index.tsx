import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Box, Grid, GridItem, Heading, Select, Text } from '@chakra-ui/react';
import { Footer } from 'Layout/Footer';
import DepositInfo from 'components/DepositInfo';
import { MyInput } from 'components/createMainPage';
import { useNavigate } from 'react-router-dom';

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
function OtherInformation({ data, error }) {
    const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    navigate("/abb-mf-remote/successPage")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto" mt="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Digər məlumatlar
            </Heading>
          </GridItem>

          {data.data[0].questions.map((question, index) =>
            question.type === 'select' ? (
              <GridItem key={index} colSpan={1}>
                <Controller
                  control={control}
                  rules={{
                    required: 'This field is required'
                  }}
                  name={question.value}
                  render={({ field }) => (
                    <>
                        <label >{question.value}</label>
                        <Select placeholder="Seçin" {...field} >
                      {question.items.map(({ key, value }) => (
                        <option key={key}>{value}</option>
                      ))}

                 
                    </Select>
                    </>
                  
                  )}
                />
                {errors['Daşınmaz əmlakın növü'] && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors['Daşınmaz əmlakın növü'].message}
                  </Text>
                )}
              </GridItem>
            ) : (
              <GridItem key={index} colSpan={1}>
                <Controller
                  control={control}
                  rules={{
                    required: 'This field is required'
                  }}
                  name="Mülkiyyətçi"
                  render={({ field }) => <MyInput {...field} placeholder="Daxil edin" label={question.value} />}
                />
                {errors['Mülkiyyətçi'] && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors['Mülkiyyətçi'].message}
                  </Text>
                )}
              </GridItem>
            )
          )}
        </Grid>

        {data.data[0].deposit.length && <DepositInfo />}
      </Box>


      <Footer />
    </form>
  );
}

export default OtherInformation;
