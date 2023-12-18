import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import {
    Box,
    Grid,
    GridItem,
    FormLabel,
    Select,
    Heading,
    Text,
} from "@chakra-ui/react";
import { MyInput } from "components/createMainPage";
import { Footer } from "Layout/Footer";


interface IFormValues {
    'Daşınmaz əmlakın növü': string
    'Mülkiyyətçi': string
    'Əmlak - ümumi məlumat': string
    'Tikinti şirkətinin adı': string
    'Şəhər': string
    'Rayon': string
    'Bələdiyyə': string
    'Qəsəbə/Kənd': string
    'Tikintinin layihəsi': string
    'Torpaq təyinatı': string
}
function OtherInformation() {
    const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>()

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                padding="24px"
                w={"100%"}
                bg="white"
                borderRadius="12px"
                margin="0 auto"
                mt="20px"
            >
                <Grid templateColumns="repeat(3, 1fr)" gap="24px">
                    <GridItem colSpan={3}>
                        <Heading as="h3" size="lg">
                            Digər məlumatlar
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel>Daşınmaz əmlakın növü</FormLabel>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Daşınmaz əmlakın növü'
                            render={({ field }) => (
                                <Select placeholder="Seçin" {...field}>
                                    <option>Həyət evi</option>
                                    <option>Bina evi</option>
                                    <option>Ticarət obyekti</option>
                                </Select>
                            )}
                        />
                        {
                            errors["Daşınmaz əmlakın növü"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Daşınmaz əmlakın növü"].message
                                }
                            </Text>
                        }

                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Mülkiyyətçi'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Mülkiyyətçi'
                                />
                            )}
                        />
                        {
                            errors["Mülkiyyətçi"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Mülkiyyətçi"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Əmlak - ümumi məlumat'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Əmlak - ümumi məlumat'
                                />
                            )}
                        />
                        {
                            errors["Əmlak - ümumi məlumat"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Əmlak - ümumi məlumat"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Tikinti şirkətinin adı'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Tikinti şirkətin adı'
                                />
                            )}
                        />
                        {
                            errors["Tikinti şirkətinin adı"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Tikinti şirkətinin adı"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Şəhər'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Şəhər'
                                />
                            )}
                        />
                        {
                            errors["Şəhər"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Şəhər"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Rayon'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Rayon'
                                />
                            )}
                        />
                        {
                            errors["Rayon"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Rayon"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Bələdiyyə'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Bələdiyyə'
                                />
                            )}
                        />
                        {
                            errors["Bələdiyyə"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Bələdiyyə"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Qəsəbə/Kənd'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Qəsəbə/kənd'
                                />
                            )}
                        />
                        {
                            errors["Qəsəbə/Kənd"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Qəsəbə/Kənd"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Tikintinin layihəsi'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Tikintinin layihəsi'
                                />
                            )}
                        />
                        {
                            errors["Tikintinin layihəsi"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Tikintinin layihəsi"].message
                                }
                            </Text>
                        }
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'This field is required',
                            }}
                            name='Torpaq təyinatı'
                            render={({ field }) => (
                                <MyInput
                                    {...field}
                                    placeholder="Daxil edin"
                                    label='Torpaq təyinatı'
                                />
                            )}
                        />
                        {
                            errors["Torpaq təyinatı"] &&
                            <Text color={'red'} fontSize={'14px'}>
                                {
                                    errors["Torpaq təyinatı"].message
                                }
                            </Text>
                        }
                    </GridItem>
                </Grid>
            </Box>
            <Footer />
        </form>
    );
}

export default OtherInformation;