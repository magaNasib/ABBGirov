import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, FormControl, FormLabel, Input, Heading, Select, Text } from "@chakra-ui/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Footer } from "Layout/Footer";
import useSWR from "swr";

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
interface IProps {
    setOtherDetailsOpen?: (open: boolean) => void;
    otherDetailsOpen?: boolean;
    colletralCode?: string;
    setCollettralCode?: any;
}

export type InputProps = {
    placeholder?: string
    type?: string
    label: string
    disabled?: boolean
    value?: string | number
    onChange: any
    // onBlur: Noop
}


export const MyInput = ({ label, ...props }: InputProps) => (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input {...props} />
    </FormControl>
)
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


const CreateMain: React.FC<IProps> = ({ setOtherDetailsOpen, otherDetailsOpen, colletralCode, setCollettralCode }) => {
    const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>()


    console.log('colletralCodeCreateMain', colletralCode);
    const [customerId, setCustomerId] = React.useState('');
    const apiUrl = `http://localhost:8082/customers/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/${customerId}`;
    const { data, error } = useSWR(customerId ? apiUrl : null, fetchCustomerData);
    const { data: productData, error: productDataError } = useSWR(
        colletralCode ? `http://localhost:8082/products/product-code/${colletralCode}` : null,
        fetchProductData
    );
    // const [{ isCreateButttonExist }] = useAppContext();
    // const [{ setIsCreateButtonExist }] = useAppContext();


    const handleInputChange = (event) => {
        setCustomerId(event.target.value);
    };
    const handleSelectChange = (event) => {
        console.log(event.target);

        setCollettralCode(event.target.value);
    };

    // const handleCreateButton = () => {
    //     setOtherDetailsOpen(true);
    //     setIsCreateButtonExist(false)

    // };

    let [isError,setIsError]=useState(false)
    useEffect(() => {
        setIsError(()=>{
            return Object.keys(errors).length > 0 ? true : false
        })
        console.log(errors);
    })

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data)
    }
   
    
    return (
        <>
            {error && <div>Error fetching customer data</div>}
            {productDataError && <div>Error !</div>}

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
                                render={({ field: { onChange } }) => (
                                    <MyInput
                                        label='Müştəri nömrəsi'
                                        placeholder="Daxil edin"
                                        onChange={(e) => {
                                            handleInputChange(e)
                                            onChange(e)
                                        }}
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
                                        value={data ? data.fullname : 'Müştəri'}
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
                                    render={({ field: { onChange } }) => (
                                        <Select placeholder="Seçin"
                                            onChange={(e) => {
                                                handleSelectChange(e)
                                                onChange(e)
                                            }} >
                                            <option>99743</option>
                                            <option>99745</option>
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
                                render={({ field: { onChange } }) => (
                                    <MyInput
                                        onChange={onChange}
                                        disabled={true}
                                        value={productData ? productData.product : 'Müştəri'}
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
                                render={({ field: { onChange } }) => (
                                    <MyInput
                                        onChange={onChange}
                                        placeholder="Daxil edin"
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
                                render={({ field: { onChange } }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        onChange={onChange}
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
                                render={({ field: { onChange } }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        onChange={onChange}
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
                                render={({ field: { onChange } }) => (
                                    <MyInput
                                        placeholder="Daxil edin"
                                        onChange={onChange}
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
                {isError && <Footer />}
            </form>
        </>
    );
}

export default CreateMain;