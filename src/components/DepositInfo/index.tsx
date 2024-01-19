import { RadioGroup,  Stack } from '@chakra-ui/react';
//Güllü Amal
import { Box, Radio, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@abb/backoffice-ui';
import { FormControl, FormLabel, Input } from '@abb/backoffice-ui';
import * as React from 'react';

function DepositInfo() {
  return (
    <Box w={'100%'} bg="white" p={26} color="black" borderRadius="12px">
      <Text as="b" fontSize="24px">
        Əmanət məlumatları
      </Text>
      <Box pt={6}>
        <Text fontSize="18px">Əmanəti seçin</Text>
        <TableContainer>
          <RadioGroup defaultValue='1'>
            <Stack>
              <Table my={3}>
                <Thead>
                  <Tr>
                    <Th w={3}></Th>
                    <Th>Filial</Th>
                    <Th>Əmanət referensi</Th>
                    <Th>Əmanətin valyutası</Th>
                  </Tr> 
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Radio value="option1" ></Radio>
                    </Td>
                    <Td>121</Td>
                    <Td>1231239102391212312</Td>
                    <Td>AZN</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Radio value="option2" ></Radio>
                    </Td>
                    <Td>121</Td>
                    <Td>1231239102391212312</Td>
                    <Td>AZN</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Stack>
          </RadioGroup>
        </TableContainer>
      
      </Box>
      <FormControl mt="24px">
        <FormLabel as="b" w="100%">
          Məbləğ
        </FormLabel>
        <Input w="30%" type="text" placeholder="Daxil edin" />
      </FormControl>
    </Box>
  );
}
export default DepositInfo;
