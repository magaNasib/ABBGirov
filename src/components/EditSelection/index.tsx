import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Grid,
  GridItem,
  Button
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

export default function EditSelection() {
  interface IFormValues {
    'Müştəri nömrəsi': number
  }
  const methods = useForm<IFormValues>({
    mode: "all",
    // defaultValues: {
    //   'Müştəri nömrəsi': 1234567,
    // },
  })

  const { handleSubmit, control, formState: { errors } } = methods;

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box display="flex" p="0px 44px" flexDirection="column">
          <Text display="flex"
            p="32px 0px"
            alignItems="flex-start"
            gap="10px"
            alignSelf="stretch"
            color="var(--semantic-onBackground-primary, #0d0d19)"
            fontFamily="Inter"
            fontSize="32px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="40px"
          >Girov seçimi</Text>
          <FormControl
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
            alignSelf="stretch"
            borderRadius="12px"
            padding="24px"
          >
            <Text
              color="var(--semantic-onSurface-primary, #0d0d19)"
              fontFamily="Inter"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="28px">
              Müştərinin CİF-ini daxil edərək girovlarının siyahısına baxaq üçün
              axtarış edin
            </Text>
            <FormLabel
              color="var(--semantic-onSurface-primary, #0d0d19)"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px">
              Müştəri nömrəsi
            </FormLabel>

            {/* <Input type="email" placeholder="Daxil edin" width="351px !important" /> */}
            <Controller
              name="Müştəri nömrəsi"
              control={control}
              rules={{
                required: "This field is required",
                pattern: /^\d+$/,
                minLength: { value: 7, message: "Customer number must be 7 digits long" },
                maxLength: { value: 7, message: "Customer number must be 7 digits long" },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  placeholder="Daxil edin"
                  width="351px !important"
                />
              )}
            />
            {errors['Müştəri nömrəsi'] && (
              <Text color="red" fontSize="14px">
                {errors['Müştəri nömrəsi'].message}
              </Text>
            )}

          </FormControl>
        </Box>

        <Box w={"100%"} mt="20px" mb="20px" className="bottomBar" bg={'white'} borderRadius="12px" >
          <Grid templateColumns="2fr 2fr" alignItems={'center'} display="flex" padding={'1rem 2rem'} justifyContent="space-between" >
            <GridItem>
              <Button padding={'.5rem 1rem'} color={"#fff"} bg={"red"}>Ləvğ et</Button>
            </GridItem>
            <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
              <Button padding={'.5rem 1rem'} color={"#fff"} bg={"blue"} type='submit'>Axtar</Button>
            </GridItem>
          </Grid>
        </Box>
      </form>

    </>
  );
}