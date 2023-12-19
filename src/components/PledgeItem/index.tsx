import { Flex, Grid, GridItem, Radio, Text } from "@chakra-ui/react";
import React from "react";
export default function ContributionComponent() {
    return (
        <Grid p="11px 24px 10px 24px" templateColumns="1fr 2fr 1fr" gap="8px" >
            <GridItem className="contributionCode" >
               <Flex>
               <Radio me={"10px"}></Radio>
                <Text>2342453245345435534</Text>
               </Flex>
            </GridItem>
            <GridItem>
                <Text>Test test test test test test test test test test test test test test test test test test test</Text>
            </GridItem>
            <GridItem>
                <Text>Araz M Whitestone</Text>
            </GridItem>
        </Grid>
    )
}





