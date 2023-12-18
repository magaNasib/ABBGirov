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
} from "@chakra-ui/react";

function CreateMain() {
    return (
        <>
            <Box
                padding="24px"
                bg="white"
                borderRadius="12px"
                margin="0 44px"
                mt="20px"
            >
                <Grid templateColumns="repeat(3, 1fr)" gap="24px">
                    <GridItem colSpan={3}>
                        <Heading as="h3" size="lg">
                            Girov haqqında məlumatlar
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Müştəri nömrəsi</FormLabel>
                            <Input type="number" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Müştərinin adı</FormLabel>
                            <Input type="text" disabled placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Girovun kateqoriyası</FormLabel>
                            <Select placeholder="Seçin">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Məhsul</FormLabel>
                            <Input type="text" disabled placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Girovun dəyəri</FormLabel>
                            <Input type="number " placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Girovun təsviri</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Girovun valyutası</FormLabel>
                            <Select placeholder="Seçin">
                                <option>AZN</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Başlama tarixi</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Bitmə tarixi</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default CreateMain;