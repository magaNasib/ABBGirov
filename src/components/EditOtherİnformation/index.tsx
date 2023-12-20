import React from "react";
import {
    Box,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Select,
    Input,
    Heading,
    Text
} from "@chakra-ui/react";
import { Footer } from "Layout/Footer";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import MyDatePicker from 'components/UI/MyDatePicker';


interface IFormValues {
    'Girov qoyanın ailə vəziyyəti': string
    'Girov qoyanın doğum tarixi': string
    'ID kodu və ya VÖEN': number
    'Şəxsiyyət vəsiqəsinin FİN kodu': number
    'Dep. müqavilə nömrəsi': number
    'Dep. AeS-də referensi': number
    'Dep. AeS-də blok referensi': number
    'Blokda olan cari hesab': number
    'Girovun məbləği': number
    'Məhkəmə/Vəfat edib': string
}


function EditOtherInformation() {
    const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>()

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    w={"100%"}
                    padding="24px"
                    bg="white"
                    borderRadius="12px"

                >
                    <Grid templateColumns="repeat(3, 1fr)" gap="24px">
                        <GridItem colSpan={3}>
                            <Heading as="h3" size="lg">
                                Digər məlumatlar
                            </Heading>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Girov qoyanin ailə vəziyyəti</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Girov qoyanın ailə vəziyyəti'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Select placeholder="Seçin" onChange={onChange} onBlur={onBlur} value={value}>
                                            <option value='Subay'>Subay</option>
                                            <option value='Evli'>Evli</option>
                                        </Select>
                                    )}
                                />
                                {
                                    errors["Girov qoyanın ailə vəziyyəti"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Girov qoyanın ailə vəziyyəti"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Girov qoyanın doğum tarixi'
                                    render={({ field }) => (
                                        <MyDatePicker field={field} label="Girov qoyanın doğum tarixi" />
                                    )}
                                />
                                {
                                    errors["Girov qoyanın doğum tarixi"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Girov qoyanın doğum tarixi"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>ID kodu və ya VÖEN</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='ID kodu və ya VÖEN'
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["ID kodu və ya VÖEN"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["ID kodu və ya VÖEN"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Şəxsiyyət vəsigəsinin FİN kodu</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Şəxsiyyət vəsiqəsinin FİN kodu'
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Şəxsiyyət vəsiqəsinin FİN kodu"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Şəxsiyyət vəsiqəsinin FİN kodu"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Dep. müqavilə nömrəsi</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name="Dep. müqavilə nömrəsi"
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Dep. müqavilə nömrəsi"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Dep. müqavilə nömrəsi"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Dep. müqavilə nömrəsi</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Dep. müqavilə nömrəsi'
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Dep. müqavilə nömrəsi"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {errors["Dep. müqavilə nömrəsi"].message}
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Dep. AeS-də referensi</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name="Dep. AeS-də referensi"
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Dep. AeS-də referensi"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Dep. AeS-də referensi"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Dep. AeS-də block referensi</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name="Dep. AeS-də blok referensi"
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Dep. AeS-də blok referensi"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Dep. AeS-də blok referensi"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Blockda olan cari hesab</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name="Blokda olan cari hesab"
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Blokda olan cari hesab"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Blokda olan cari hesab"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Girovun məbləği</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name="Girovun məbləği"
                                    render={({ field }) => (
                                        <Input
                                            placeholder="Daxil edin"
                                            {...field}
                                        />
                                    )}
                                />
                                {
                                    errors["Girovun məbləği"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Girovun məbləği"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Məhkəmə/Vəfat edib</FormLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: 'This field is required',
                                    }}
                                    name='Məhkəmə/Vəfat edib'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Select placeholder="Seçin" onChange={onChange} onBlur={onBlur} value={value}>
                                            <option value='Subay'>Həyət evi</option>
                                            <option value='Evli'>Bina evi</option>
                                            <option value='Evli'>Ticarət obyekti</option>
                                        </Select>
                                    )}
                                />
                                {
                                    errors["Məhkəmə/Vəfat edib"] &&
                                    <Text color={'red'} fontSize={'14px'}>
                                        {
                                            errors["Məhkəmə/Vəfat edib"].message
                                        }
                                    </Text>
                                }
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Footer onSubmitHandler={undefined} isCreateMode={undefined} />
                </Box>
            </form>
        </>
    );
}

export default EditOtherInformation;