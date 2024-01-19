import { Box, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Select, SkeletonCircle, SkeletonText } from '@abb/backoffice-ui';
// import { Box, Grid, GridItem, Heading,  SkeletonCircle, SkeletonText } from '@abb/backoffice-ui';
import { MyInput } from 'components/UI/MyInput';
import DepositInfo from 'components/DepositInfo';
import { Footer } from 'Layout/Footer';
import { IFormValues } from 'pages/Create';
import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IProps } from 'components/createMainPage';
import { IPladge } from 'models';
import { SWR_CONFIG } from 'consts';
import { useFrameworkServices } from 'hooks';



const OtherInformation: React.FC<IProps> = ({ mode }) => {

  const methods = useFormContext<IFormValues>();
  const navigate = useNavigate()
  const { colletralCode } = useParams();
  console.log({colletralCode});
  const {httpClient} = useFrameworkServices();
  
  const { data: pledgeData, isLoading } = useSWR<IPladge>(`/api/pledges/${colletralCode}`, httpClient.get, SWR_CONFIG);

  const onSubmitHandler = methods.handleSubmit((data) => {
    mode === 'create' && httpClient.post("/api/pledges", data).then((data) => {
      console.log(data);
    });

    mode === 'edit' && httpClient.put("/api/pledges/1", data).then((data) => {
      console.log(data);

    })
    navigate('/app/pledge/success')
  });

  useEffect(() => {
    !methods.getValues('customerId') && navigate('/app/pledge/create')
  }, [])

  if (isLoading) {
    return (
      <Box padding='6' boxShadow='lg' bg='white' width="100%">
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    )
  }

  return (
    <>
        {pledgeData?.data[0].deposit.length ? <DepositInfo /> : ''}
        <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto">
          <Grid templateColumns="repeat(3, 1fr)" gap="24px">
            <GridItem colSpan={3}>
              <Heading as="h3" size="lg">
                Digər məlumatlar
              </Heading>
            </GridItem>

            {pledgeData?.data[0].questions.map((question, index) => {
              return question.type === 'select' ? (
                <GridItem key={index} colSpan={1}>
                  <FormControl isInvalid={!!methods.formState.errors[question.key]}>
                    <Controller
                      control={methods.control}
                      rules={{
                        required: 'This field is required'
                      }}
                      name={question.key}
                      render={({ field }) => (
                        <>
                          <FormLabel>{question.value}</FormLabel>
                          <Select placeholder="Seçin" value={field.value} onChange={field.onChange} {...field}>
                            {question.items.map(({ key, value }) => (
                              <option key={key}>{value}</option>
                            ))}
                          </Select>
                        </>
                      )}
                    />
                    <FormErrorMessage>
                      {methods.formState.errors[question.key]?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              ) : (
                <GridItem key={index} colSpan={1}>
                  <FormControl isInvalid={!!methods.formState.errors[question.key]}>
                    <Controller
                      control={methods.control}
                      rules={{
                        required: 'This field is required'
                      }}
                      name={question.key}
                      render={({ field }) => <MyInput {...field} placeholder="Daxil edin" label={question.value} />}
                    />
                    <FormErrorMessage color={'red'} fontSize={'14px'}>
                      {methods.formState.errors[question.key]?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              );
            })}
          </Grid>
        </Box>

      <Footer onSubmitHandler={onSubmitHandler} isCreateMode={!!colletralCode} mode={mode} />
    </>
  );
};

export default OtherInformation;