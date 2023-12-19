import { Box, Button, GridItem, Heading, Image, Text,Grid } from "@chakra-ui/react";
import React from "react";
import image1 from '../../icons/Modal-Success-icon.png';

function CreateSuccessComponent() {
    return (
        <Box  w={"100%"} padding="0 44px">
        <Heading as='h4' size='md' margin="32px 0">
            Girovun yaradılmasinin nəticəsi
        </Heading>
        <Box 
            padding="40px 24px" 
            bg="white" 
            borderRadius="12px" 
            display="flex"
            flexDirection="column"
            gap="24px"
            alignItems="center"
            justifyContent="center">
            
            <Image src={image1} alt="accesIcon" />
            <Heading as='h4' size='md'>
                Girov yaradıldı
            </Heading>
            <Text color='black'>Girov nömrəsi: <Text as="span" color="#3B8DD4">111222333</Text></Text>

        </Box>
        <Box mt="20px" mb="20px" className="bottomBar"  >
                <Grid templateColumns="2fr 2fr" display="flex" justifyContent="space-between" >
                  
                    <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
                        <Button  mt={"12px"}  color={"#fff"} bg={"blue"}>Son</Button>

                    </GridItem>
                </Grid>
            </Box>
    </Box>
);
}

export default CreateSuccessComponent;