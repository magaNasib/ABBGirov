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

function OtherInformation() {
    return (
        <>
            <Box
                padding="24px"
                bg="white"
                borderRadius="12px"
                margin="0 44px"
                mt="20px"
                w={"100%"}
            >
                <Grid templateColumns="repeat(3, 1fr)" gap="24px">
                    <GridItem colSpan={3}>
                        <Heading as="h3" size="lg">
                            Digər məlumatlar
                        </Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Daşınmaz əmlakın növü</FormLabel>
                            <Select placeholder="Seçin">
                                <option>Həyət evi</option>
                                <option>Bina evi</option>
                                <option>Ticarət obyekti</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Mülkiyyətçi</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Əmlak - ümumi məlumat</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Tikinti şirkətin adı</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Şəhər</FormLabel>
                            <Select placeholder="Seçin">
                                <option>Bakı</option>
                                <option>Sumqayıt</option>
                                <option>Gəncə</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Rayon</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Bələdiyyə</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Qəsəbə/kənd</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Tikintinin layihəsi</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Torpaq təyinatı</FormLabel>
                            <Input type="text" placeholder="Daxil edin" />
                        </FormControl>
                    </GridItem>
                </Grid>
            </Box>
           
        </>
    );
}

export default OtherInformation;