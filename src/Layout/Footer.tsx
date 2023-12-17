import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Box mt="20px" mb="20px" className="bottomBar"  >
    <Grid templateColumns="2fr 2fr" display="flex" justifyContent="space-between" >
        <GridItem>
        <Button mt={"12px"} color={"#fff"} bg={"red"}>Ləvğ et</Button>
        </GridItem>
        <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
            <Button  mt={"12px"}  color={"#fff"} bg={"blue"}>Yarat</Button>

        </GridItem>
    </Grid>
</Box>
  )
}
