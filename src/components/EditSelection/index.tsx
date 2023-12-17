import React from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Text,
  } from "@chakra-ui/react";
  
  export default function EditSelection() {
    return (
      <Box display="flex" p="0px 44px" flexDirection="column">
        <Text display="flex"
          p="32px 0px"
          alignItems="flex-start"
          gap="10px"
          alignSelf="stretch"
          color="var(--semantic-onBackground-primary, #0d0d19)"
          fontFamily="Inter"
          fontSize="32px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="40px"
        >Girov seçimi</Text>
        <FormControl
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="16px"
          alignSelf="stretch"
          borderRadius="12px"
          padding="24px" 
          >
          <Text
            color="var(--semantic-onSurface-primary, #0d0d19)"
            fontFamily="Inter"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="28px">
            Müştərinin CİF-ini daxil edərək girovlarının siyahısına baxaq üçün
            axtarış edin
          </Text>
          <FormLabel
            color="var(--semantic-onSurface-primary, #0d0d19)"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="24px">
            Müştəri nömrəsi
          </FormLabel>
          <Input type="email" placeholder="Daxil edin" width="351px !important"/>
        </FormControl>
      </Box>
    );
  }