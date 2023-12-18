import React from "react";
import { Box, Grid, GridItem, FormControl, FormLabel, Input, Heading, Select, Text } from "@chakra-ui/react";
import { useForm, SubmitHandler, Controller, Noop } from "react-hook-form"
import { Footer } from "Layout/Footer";


interface IFormValues {
    'Müştəri nömrəsi': number
    'Müştərinin adı': string
    'Məhsul': string
    'Girovun dəyəri': number
    'Girovun təsviri': string
    'Girovun valyutası': string
    'Başlama tarixi': string
    'Girovun kateqoriyası': string
    'Bitmə tarixi': string
}
export type InputProps = {
    placeholder?: string
    type?: string
    label: string
    disabled?: boolean
    onBlur: Noop
    onChange: () => void
}

export const MyInput = ({ label, ...props }: InputProps) => (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input {...props} />
    </FormControl>
)

function CreateMain() {
    const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>()




    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data)
    }
    return (
        <>
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
                            <Heading as="h3" size="lg">Girovun yaradılması</Heading>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Controller
                                control={control}
                                rules={{
                                    required: 'This field is required',
                                    pattern: /^\d{7}$/,
                                    minLength: { value: 7, message: 'Customer number must be 7 digits long' },
                                    maxLength: { value: 7, message: 'Customer number must be 7 digits long' }
                                }}
                                name='Müştəri nömrəsi'
                                render={({ field }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        {...field}
                                        label='Müştəri nömrəsi'
                                    />
                                )}
                            />
                            {
                                errors["Müştəri nömrəsi"] &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors["Müştəri nömrəsi"].message
                                    }
                                </Text>
                            }
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Controller
                                control={control}
                                rules={{
                                    // required: 'This field is required',
                                }}
                                name='Müştərinin adı'
                                render={({ field }) => (
                                    <MyInput
                                        {...field}
                                        placeholder="Ad Soyad Ata adı"
                                        disabled
                                        label='Müştərinin adı'

                                    />
                                )}
                            />
                            {
                                errors["Müştərinin adı"] &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors["Müştərinin adı"].message
                                    }
                                </Text>
                            }
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Girovun kateqoriyası</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Girovun kateqoriyası'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Select placeholder="Seçin" onChange={onChange} onBlur={onBlur} value={value}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                        </Select>
                                    )}
                                />
                                {
                                    errors["Girovun kateqoriyası"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Girovun kateqoriyası"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Controller
                                control={control}
                                rules={{
                                    // required: 'This field is required',
                                }}
                                name='Məhsul'
                                render={({ field }) => (
                                    <MyInput
                                        {...field}
                                        disabled={true}
                                        label='Məhsul'
                                    />
                                )}
                            />
                            {
                                errors.Məhsul &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors.Məhsul.message
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
                                name='Girovun dəyəri'
                                render={({ field }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        {...field}
                                        label='Girovun dəyəri'
                                    />
                                )}
                            />
                            {
                                errors["Girovun dəyəri"] &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors["Girovun dəyəri"].message
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
                                name='Girovun təsviri'
                                render={({ field }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        {...field}
                                        label='Girovun təsviri'

                                    />
                                )}
                            />
                            {
                                errors["Girovun təsviri"] &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors["Girovun təsviri"].message
                                    }
                                </Text>
                            }
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Girovun valyutası</FormLabel>

                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Girovun valyutası'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Select placeholder="Seçin" onChange={onChange} onBlur={onBlur} value={value}>
                                            <option value='1'>AZN</option>
                                            <option value='2'>USD</option>
                                        </Select>
                                    )}
                                />
                                {
                                    errors["Girovun valyutası"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Girovun valyutası"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Controller
                                control={control}
                                rules={{
                                    required: 'This field is required',
                                }}
                                name='Başlama tarixi'
                                render={({ field }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        {...field}
                                        type="datetime-local"
                                        label='Başlama tarixi'

                                    />
                                )}
                            />
                            {
                                errors["Başlama tarixi"] &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors["Başlama tarixi"].message
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
                                name='Bitmə tarixi'
                                render={({ field }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        {...field}
                                        type="datetime-local"
                                        label='Bitmə tarixi'

                                    />
                                )}
                            />
                            {
                                errors["Bitmə tarixi"] &&
                                <Text color={'red'} fontSize={'14px'}>
                                    {
                                        errors["Bitmə tarixi"].message
                                    }
                                </Text>
                            }
                        </GridItem>
                    </Grid>
                </Box>
                <Footer />
            </form>
        </>
    );
}

export default CreateMain;