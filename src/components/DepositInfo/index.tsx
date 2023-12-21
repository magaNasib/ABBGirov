import { RadioGroup, Select, Stack } from '@chakra-ui/react';
//Güllü Amal
import { Box, Radio, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import LeftIcon from 'icons/LeftIcon';
import RightIcon from 'icons/RightIcon';
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
        <Box display="flex">
          <Text>Sətir sayı</Text>
          <Select ms={'10px'} size="xs" maxW={16} defaultValue={6}>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
          </Select>
          <Box display="flex" pl="60%">
            <Text mt='2px'>2-2 /</Text>
            <Text mt='2px' color="#000000A3">1 </Text>
            <Box ml='24px'>
              <LeftIcon width='20' height='20' />
              <RightIcon width='20' height='20' />
            </Box>
          </Box>
        </Box>
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
