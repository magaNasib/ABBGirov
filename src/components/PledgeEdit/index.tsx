import { Box, Grid, GridItem, Heading, Text, Divider, Select, Button, Link } from "@chakra-ui/react";
// import chevronLeft from "../../assets/chevronsImg/chevronLeft.svg"
// import chevronRight from "../../assets/chevronsImg/chevronRight.svg"

import React from "react";
import PledgeItem from "components/PledgeItem";
export default function PladgeEditList() {
    return (
        <Box backgroundColor="GhostWhite" pl="44px" pr="44px" className="container" >
            <Heading pb="32px" pt="32px" className="headingText"  >Girov seçimi</Heading>
            <Box backgroundColor="white" borderEndRadius="12px" className="secondContent" p="24px" borderRadius="12px" >
                <Grid mb="24px" templateColumns="repeat(3, 1fr)" gap="24px">
                    <GridItem  >
                        <Text className="textWidthGreyColor" >Müştəri nömrəsi</Text>
                        <Text className="textWidthBlackColor" >1231231</Text>
                    </GridItem >
                    <GridItem >
                        <Text className="textWidthGreyColor">Ad, Soy ad, Ata adı</Text>
                        <Text className="textWidthBlackColor" >Bəsti İsmayılova Oruc qızı</Text>
                    </GridItem >
                </Grid>
                <Heading className="secondHeading" >Düzəliş etmək istədiyiniz girovu seçin:</Heading>
                <Grid pt="16px" pl="60px" pr="24px" pb="15px" templateColumns="0.8fr 2fr 1fr" gap="24px" >
                    <GridItem>
                        <Text >Girov kodu</Text>
                    </GridItem>
                    <GridItem>
                        <Text pl="15px" >Təsiri</Text>
                    </GridItem>
                    <GridItem>
                        <Text>Etibarnamə tarixi</Text>
                    </GridItem>
                </Grid>
                <Divider />
                <PledgeItem/>
                <PledgeItem/>
                <PledgeItem/>
                <PledgeItem/>
                <Divider />
                <Grid templateColumns="1fr 2fr" p="16px 24px">
                    <GridItem display="flex" alignItems="center" gap="8px" >
                        <Text>Sətir sayı</Text>
                        <Select className="selectorChoose">
                            <option value='option1'>3</option>
                            <option value='option2'>6</option>
                            <option value='option3'>12</option>
                        </Select>
                    </GridItem>
                    <GridItem display="flex" justifyContent="flex-end" alignItems="center" gap="24px" flex="1 0 0" >
                        <Text>1-6 / 50</Text>
                        <Box display="flex" alignItems="center" gap="8px" >
                            {/* <img src={chevronLeft} alt="" />
                            <img src={chevronRight} alt="" /> */}
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            <Box mt="20px" mb="20px" className="bottomBar"  >
                <Grid templateColumns="2fr 2fr" display="flex" justifyContent="space-between" >
                    <GridItem>
                    <Button mt={"12px"} color={"#fff"} bg={"red"}>Ləvğ et</Button>
                    </GridItem>
                    <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
                    <Button  mt={"12px"}  border={"1px solid gray"} borderRadius={"5px"}><Link href="/abb-mf-pledge/edit">Başqa müştəri axtar</Link> </Button>
                        <Button  mt={"12px"}  color={"#fff"} bg={"blue"}>Davam et</Button>

                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}