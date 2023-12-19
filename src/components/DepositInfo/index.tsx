import { Select } from '@chakra-ui/react';
//Güllü Amal
import { Box,  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
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
                  <input type='radio' value="option1" id="radio1" name='radio' />
                </Td>
                <Td>121</Td>
                <Td>1231239102391212312</Td>
                <Td>AZN</Td>
              </Tr>
              <Tr>
                <Td>
                  <input type='radio' value="option2" id="radio2" name='radio' />
                </Td>
                <Td>121</Td>
                <Td>1231239102391212312</Td>
                <Td>AZN</Td>
              </Tr>
            </Tbody>
          </Table>
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
            <Text>2-2 /</Text>
            <Text color="#000000A3">1 </Text>
            {/* <Image src={leftIcon} alt="Left Arrow" />
      <Image src={rightIcon} alt="Right Arrow" /> */}
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
