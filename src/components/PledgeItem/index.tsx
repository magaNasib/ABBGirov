import { Flex, Grid, GridItem, Radio, Text } from "@chakra-ui/react";
import React from "react";


export default function ContributionComponent({ code, date, desc}) {
    return (
    
                <Grid p="11px 24px 10px 24px" templateColumns="1fr 2fr 1fr" gap="8px" >
                    <GridItem className="contributionCode" >
                        <Flex>
                            <Radio me={"10px"} value={code}></Radio>
                            <Text>{code}</Text>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Text>{desc}</Text>
                    </GridItem>
                    <GridItem>
                        <Text>{date}</Text>
                    </GridItem>
                </Grid>
    )
}





