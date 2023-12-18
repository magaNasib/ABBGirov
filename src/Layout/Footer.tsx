import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  
  return (
    <Box mt="20px" mb="20px" className="bottomBar" bg={'white'} borderRadius="12px" >
      <Grid templateColumns="2fr 2fr" alignItems={'center'} display="flex" padding={'1rem 2rem'} justifyContent="space-between" >
        <GridItem>
          <Button padding={'.5rem 1rem'} color={"#fff"} bg={"red"} type='reset'>Ləvğ et</Button>
        </GridItem>
        <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
          <Button padding={'.5rem 1rem'}  color={"#fff"} bg={"blue"}  type='submit'>Yarat</Button>
        </GridItem>
      </Grid>
    </Box>
  )
}