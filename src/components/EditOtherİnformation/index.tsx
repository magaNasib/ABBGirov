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

function EditOtherInformation() {
    return (
        <>
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
                            <Select placeholder="Seçin">
                                <option>Subay</option>
                                <option>Evli evi</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Girov qoyanın doğum tarixi</FormLabel>
                            <Input type="date" placeholder="GG/AA/İİ" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>ID kodu və ya VÖEN</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Şəxsiyyət vəsigəsinin FİN kodu</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Dep. müqavilə nömrəsi</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Dep. müqavilə nömrəsi</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Dep. AeS-də referensi</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Dep. AeS-də block referensi</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Blockda olan cari hesab</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Girovun məbləği</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Məhkəmə/Vəfat edib</FormLabel>
                            <Select placeholder="Seçin">
                                <option>Həyət evi</option>
                                <option>Bina evi</option>
                                <option>Ticarət obyekti</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default EditOtherInformation;