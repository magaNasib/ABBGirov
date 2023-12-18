import React from "react";
import { Box, Grid, GridItem, FormControl, FormLabel, Select, Input, Heading } from "@chakra-ui/react";
import { Path, useForm, UseFormRegister, SubmitHandler, Controller } from "react-hook-form"
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
type InputProps = {
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
    required: boolean
    readOnly?: boolean
    placeHolder?: string
    type?: string
    disabled?: boolean

}
interface MySelectProps {
    label: string;
    options: { value: string; label: string }[];
    required: boolean

}

function CreateMain() {
    const { register, handleSubmit,control } = useForm<IFormValues>()

    const MyInput = ({ label, register, required, readOnly, type = 'text', placeHolder = 'Daxil edin', disabled }: InputProps) => (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input placeholder={placeHolder} type={type} {...register(label, { required })} readOnly={readOnly} disabled={disabled} />
        </FormControl>
    )

    const MySelect = React.forwardRef<HTMLSelectElement, MySelectProps>(({ label, options, required }, ref) => (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Select ref={ref} placeholder="Seçin">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </FormControl>
    ));

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
                            <Heading as="h3" size="lg">
                                Girovun yaradılması
                            </Heading>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Müştəri nömrəsi" register={register} required />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Müştərinin adı" placeHolder="Ad Soyad Ata adı" register={register} required readOnly />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Controller
                                name="Girovun kateqoriyası"
                                control={control}
                                render={({ field }) => (
                                    <MySelect
                                        label="Girovun kateqoriyası"
                                        options={[
                                            { value: '1', label: '1' },
                                            { value: '2', label: '2' },
                                            { value: '3', label: '3' },
                                        ]}
                                        required={true}
                                        {...field}
                                    />
                                )}
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Məhsul" register={register} placeHolder="" disabled required readOnly />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Girovun dəyəri" register={register} required />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Girovun təsviri" register={register} required />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Controller
                                name="Girovun valyutası"
                                control={control}
                                render={({ field }) => (
                                    <MySelect
                                        label="Girovun valyutası"
                                        options={[
                                            { value: 'AZN', label: 'AZN' },
                                            { value: 'USD', label: 'USD' },
                                            { value: 'EUR', label: 'EUR' },
                                        ]}
                                        required={true}
                                        {...field}
                                    />
                                )}
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Başlama tarixi" register={register} required type="datetime-local" />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <MyInput label="Bitmə tarixi" register={register} required type="datetime-local" />
                        </GridItem>
                    </Grid>
                </Box>
                <Footer />
            </form>
        </>
    );
}

export default CreateMain;